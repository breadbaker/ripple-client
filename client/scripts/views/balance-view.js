'use strict';
var BaseView = require('base-view');

var Handlebars = require('handlebars');
var templates = require('templates')(Handlebars);

var BalanceModel = require('models/balance-model');

var renderBalancePie = require('lib/render-balance-pie');

module.exports = BaseView.extend({
    template: templates['balances'],

    renderBalancePie: renderBalancePie,

    model: new BalanceModel(),

    afterRender: function () {
        var that = this;
        this.model.fetch({
            success: function () {
                that.renderBalancePie(that.model);
            }
        });
    }
});
