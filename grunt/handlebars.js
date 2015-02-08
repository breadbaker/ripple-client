'use strict';

module.exports = function (grunt) {

    grunt.config.set('watch.handlebars', {
        files: [
            'client/templates/**/*.hbs'
        ],
        tasks: [
            'handlebars:web',
            'browserify:dev'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.config.set('handlebars', {
        options: {
            commonjs: true,
            namespace: false,
            processName: function (filename) {
                return filename.replace(/.+templates\//, '').replace(/\..+$/, '');
            }
        },
        web: {
            files: {
                'client/scripts/templates.js' : [ 'client/templates/**/*.hbs' ]
            }
        }
    });
};