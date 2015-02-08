'use strict';

var RouterBase = require('./router-base');

var BalanceView = require('views/balance-view');

var __super__ = RouterBase.prototype;

module.exports = RouterBase.extend({

    routes: {
        '': 'balance'
    },

    balance: function () {
        var that = this;

        this.showView(new BalanceView());
    },

    initialize: function () {
        __super__.initialize.apply(this, arguments);

        Backbone.history.start();

        return this;
    }
});
