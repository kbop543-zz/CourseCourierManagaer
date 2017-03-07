'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var courier = require('./routes/courier-routes');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));




app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Main page. 
app.get('/', function(req, res) {
    res.sendfile('index.html');
});


//Routes

/*app.get('/thingHere', courier.findAll); */



// Start the server
app.listen(3000);
console.log('Listening on port 3000');