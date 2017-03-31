'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var session = require('express-session');


var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(validator());
app.use(session({
    secret: 'csc301',
    resave: false,
    saveUninitialized: false
}));
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

app.get('/', function(req, res) {
    res.sendfile('views/login.html');
});

/*app.post('/uploadSyllabus',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.sendfile('views/courses.html');
    });
});*/

// Main page.
app.get('/index', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    } else {
        res.sendfile('views/index.html');
    }
});

app.get('/login', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    } else {
        res.sendfile('views/index.html');
    }
});

app.get('/profile', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    } else {
        res.sendfile('views/profile.html');
    }
});

app.get('/courses', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    }else {
        res.sendfile('views/courses.html');
    }

});

app.get('/myMarks', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    }else {
        res.sendfile('views/myMarks.html');
    }

});

// Redirect to login and reset session on log out
app.get('/logout', function(req, res) {
    req.session.username = undefined;
    res.redirect('/');
});

app.get('/addMarkable', function(req, res) {
    if (req.session.username == undefined) {
        res.sendfile('views/login.html');
    } else {
        res.sendfile('views/addMarkable.html');
    }
});


// Routes files
var users = require('./routes/userRoutes.js');
var file = require('./routes/fileRoutes.js');

// Models
var usersDb = require('./models/user');


//user routes
app.post('/createAccount', users.signUp);
app.post('/signIn', users.signIn);
app.get('/getOneUser', users.getOneUser);

//file routes
app.post('/parsePdf',file.parsePdf);
app.post('/addMarkable',file.addMarkable);
app.post('/uploadSyllabus',file.uploadSyllabus);


// Start the server
app.listen(3000);
console.log('Listening on port 3000');
