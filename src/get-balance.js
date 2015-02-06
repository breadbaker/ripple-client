'use strict';

var Client = require('node-rest-client').Client;

var personal = require('../secret');

client = new Client();

client.get('https://api.ripple.com/v1/accounts/' + personal.rippleAddress + '/balances', function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });