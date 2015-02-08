'use strict';

var BaseModel = require('base-model');

module.exports = BaseModel.extend({

    url: 'getBalance',

    contourData: function () {
        return _.map(this.get('balances'), function (balance) {
            return {
                x: balance.currency,
                y: balance.value
            };
        });
    }
});
