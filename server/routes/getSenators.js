var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

//mock data from database to be sent
var districts = [
    {number: "1", senator: "Mark Johnson", email: "mockemail5522@gmail.com"},
    {number: "2", senator: "Paul Utke", email: "mockemail5522@gmail.com"},
    {number: "3", senator: "Carrie Ruud", email: "mockemail5522@gmail.com"}
]

res.send(districts);

}); // end get

module.exports = router;
