var Client = require('node-rest-client').Client;

client = new Client();

client.get('https://api.ripple.com/v1/wallet/new', function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });