var express = require('express');
var bodyParser = require('body-parser');
var myToUpper = require('./touppercase-module.js');

var app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser());

app.post('/post', function(req, res){
    console.log(req.body);
    res.send(myToUpper(req.body.myinput));
});

module.exports = app;