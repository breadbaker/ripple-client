var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

var port = Number(process.env.PORT || 5000);
console.log('port', port);
app.listen(port, function () {
    console.log('Listening on ' + port);
});