var express = require('express');
var app = express();

require('./../secret');

var getBalance = require('./get-balance');

app.get('/getBalance', function (req, res) {
    getBalance(req, res);
});


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/web/index.html');
});

app.use('/web',express.static(__dirname + '/web'));


var port = Number(process.env.PORT || 5000);
console.log('port', port);
app.listen(port, function () {
    console.log('Listening on ' + port);
});