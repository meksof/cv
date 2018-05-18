const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile('index.html');
    //It will find and locate index.html from View or Scripts
});

// HTTP server
// ========================================================
const httpServer = app.listen(port, function () {
    console.log('HTTP server listening on port ' + port);
});