/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var connect = require('connect');

/** 
 * Configuration
 */


app.use(express.bodyParser());
app.use(connect.compress());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/client/src', { maxAge: 10000 }));

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


app.get('/', function index(req, res) {
    res.sendfile('client/src/html/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on http://localhost:'+ port);
});
 
