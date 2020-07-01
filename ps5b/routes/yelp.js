const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/yelpAPI');
const redis = require('redis');

// create and connect redis client to local instance.
const client = redis.createClient();

// Print redis errors to the console
client.on('error', (err) => {
    console.log("Error " + err);
});

router.route('/restaurants')
    .post(async (req, res, next) => {
        let city = req.body.city.toUpperCase();
        let result = await client.get(city); //waiting for this c
        //  fetching the result from Redis first in case have it cached
        return client.get(city, (err, result) => {
            // if get the cached result, then we will render restaurants.ejs with the value we get back
            if (result) {
                res.status(200).render('restaurant', {city, data: JSON.parse(result) , cached: true})
            } else {
                fetch(CONFIG.url + 'term=restaurant&location=' + req.body.city, {headers: CONFIG.headers}).then(
                    async (fetchResult) => {
                        let restaurants = await fetchResult.json()
                        const data = restaurants.businesses.sort(
                            // Sort list of restaurants returned by rating
                            (a, b) => b.rating - a.rating
                        );
                        client.set(city, JSON.stringify(data)); //save api response in Redis store; stringify data then when get it out, parsify
                        res.render("restaurant", { //have calculated the data, saving it in redis, THEN rendering
                            city, data, cached: false //can tell whether data came from cached or not
                        });
                    }
                )

            }

        })

    })

module.exports = router;
