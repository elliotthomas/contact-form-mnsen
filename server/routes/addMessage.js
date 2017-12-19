var express = require( 'express' );
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

router.post('/', function(req, res){
console.log('in add message post');
  console.log('req.body', req.body);

  //req.body will be sent to IT database here (no schema required)

  //Email will be sent to Senator here (code below)

  var senatorEmail = req.body.senatorData[2]
  var message = req.body.message

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mockemail5522@gmail.com',
        pass: 'minnesota1234'
    }
});

// setup email data with unicode symbols
var mailOptions = {
    from: '"Test1" <avhs.test1@apps.district196.org>', // sender address
    to: '<'+ req.body.senatorData[2] +'>', // list of receivers
    subject: 'A Message was recieved from your constiuent, ' + req.body.firstName + ' ' + req.body.lastName +'', // Subject line
    text: 'Hi Senator ' + req.body.senatorData[1]  + ',\n\ \n\ ' + 'You recieved a message from ' + req.body.firstName + ' ' + req.body.lastName + '. Please see the message below: \n\ \n\ ' + message + '' // plain text body
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    else console.log('message sent');
});

});//end post

module.exports = router;
