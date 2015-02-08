'use strict';

module.exports = function (model) {
    var contour = new Contour({
        el: '.balances',
        chart: {
            height: 260
        },
        legend: {
            vAlign: 'top'
        }
    })
    .pie(model.contourData())
    .tooltip()
    .render();
}