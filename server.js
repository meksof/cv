const express = require('express');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');



const port = process.env.PORT || 3000;


var dbUri= "mongodb://sofien:sofien@ds233208.mlab.com:33208/sofback";
mongoose.connect(dbUri);

//log connection
mongoose.connection.on('connected', function(){
  console.log('connected to '+dbUri);
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile('index.html');
    //It will find and locate index.html from View or Scripts
});

app.use('/api', indexRouter);

// HTTP server
// ========================================================
const httpServer = app.listen(port, function () {
    console.log('HTTP server listening on port ' + port);
});