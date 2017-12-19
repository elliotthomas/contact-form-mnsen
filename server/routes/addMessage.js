var express = require( 'express' );
var router = express.Router();
var path = require('path');

router.post('/', function(req, res){
console.log('in add message post');
  console.log('req.body', req.body);



});//end post

module.exports = router;
