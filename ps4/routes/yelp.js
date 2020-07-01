const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/yelpAPI');

//To Send Search String into Route, use form 'searchStringForm.html' in public
router.route('/')
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + 'term=restaurant&location=' + req.body.city, {headers: CONFIG.headers});
        let restaurants = await result.json()
        let city = req.body.city.toUpperCase()
        res.render("restaurant", {city, data: restaurants.businesses.sort(
            // Sort list of restaurants returned by rating
                    (a, b) => b.rating - a.rating

                )});
    })

module.exports=router;

//From Postman
// const request = require('request');
// const options = {
//     'method': 'GET',
//     'url': 'https://api.yelp.com/v3/businesses/search?location=Dallas',
//     'headers': {
//         'Authorization': 'Bearer r_0ht7wxP17YUJHnSiNEXMA1LtLeYV-vFD1l2jvkpbg3_LMWVbF-I6U17Jlgd7M8Oi4ugNhrGS7SIpQVEMWlUCOImTD95DaW8ZWMJBXoshLR4KcHERAnYgbfgM-pXXYx'
//     },
//     form: {
//
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });