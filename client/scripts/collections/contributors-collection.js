var BaseCollection = Backbone.Collection;

module.exports = BaseCollection.extend({

    url: function () {
        return 'getContributors?cid=' + this.id;
    },

    parse: function (data) {
        if (!data.contributors){
            return [];
         } else {
            var contributors = [];
            _.each(data.contributors[0].contributor, function (contributor) {
                contributors.push(contributor.$);
            });
            return contributors;
        }
    },

    forContour: function (argument) {
        var data = {
            series: []
        };

        data.total = _.inject(this.models, function (memo, model) {
            return memo + +model.get('total');
        }, 0);

        _.each(this.models, function (model) {
            data.series.push({
                x: model.get('org_name'),
                y: model.get('total') / data.total,
                real: model.get('total')
            });
        });

        return data;
    }
})