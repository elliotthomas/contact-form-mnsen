var express = require( 'express' );
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

router.post('/', function(req, res){
console.log('in add message post');
  console.log('req.body', req.body);

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
    subject: 'A Message recieved from your constiuent', // Subject line
    text: 'You reserved ' + message + ' during period(s): ' // plain text body
    // html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    else console.log('message sent');
});



});//end post

module.exports = router;
