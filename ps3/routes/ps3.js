const express = require('express');
const router = express.Router();

//Part B: Route using GET method that returns a JSON object with 1 key/value pair (return fixed string)
router.get('/', function (req, res, next) {
    // Passed into ps3b.pug for rendering
    res.render('ps3renderfile', {string1: 'Part B is now completed'});
})
    //Part C: POST method to return JSON obj with 2 key/value pairs (original string and length)
    //I created an html form 'testPostRoute.html' to pass in parameters
    .post('/', function (req, res, next) {
        console.log(req.body);
        //Passed JSON obj to ps3c.pug for rendering
        //String length property performed here in JS file then passed as key/value pair to Pug
        res.render('ps3renderfile', {string2: req.body.marijuanaStrain, len: req.body.marijuanaStrain.length});
    })
;
//From Postman for manual node js request --> Used HTML form 'testPostRoute.html' in public instead!
// var request = require('request');
// var options = {
//     'method': 'POST',
//     'url': 'localhost:3000/ps3',
//     'headers': {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     form: {
//         'marijuanaStrain': 'Girl Scout Cookies'
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });


module.exports = router;
