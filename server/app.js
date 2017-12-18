var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


//set up server listening
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log("server running, check localhost:3000");
});

//require routers
var addMessageRouter = require ('./routes/addMessage.js');

//Routers
app.use('/addMessage', addMessageRouter);

var indexRoute = require('./routes/indexRoute');
app.use('/', indexRoute);


module.exports = app;
