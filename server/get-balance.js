'use strict';

var Client = require('node-rest-client').Client;

var client = new Client();

module.exports = function (req, res) {
    client.get('https://api.ripple.com/v1/accounts/' + process.env.rippleAddress + '/balances', function (data, response) {
        res.send(data);
    });
};

