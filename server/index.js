'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.post('/post', function(req, res){
    console.log(req.body);
    res.send(req.body.myinput);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});