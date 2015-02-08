'use strict';

var _ = require('lodash');
var minifyify = require('minifyify');

module.exports = function (grunt) {
    var scripts = grunt.config.get('scripts');

    grunt.loadNpmTasks('grunt-browserify');

    var appFiles = [{
        dest: 'server/web/scripts/app.min.js',
        src: [
            './client/scripts/main.js',
            '!./client/scripts/vendor/**/*.js',
            '!./client/scripts/templates.js'
        ]
    }];

    var appOptions = {
        alias: [
            './client/scripts/views/base-view.js:base-view',
            './client/scripts/models/base-model.js:base-model',
            './client/scripts/templates.js:templates'
        ],
        aliasMappings: [
            {
                expand: true,
                cwd: 'client/scripts/models',
                src: ['**/*.js'],
                dest: 'models/'
            },{
                expand: true,
                cwd: 'client/scripts/collections',
                src: ['**/*.js'],
                dest: 'collections/'
            },{
                expand: true,
                cwd: 'client/scripts/views',
                src: ['**/*.js'],
                dest: 'views/'
            },{
                expand: true,
                cwd: 'client/scripts/service',
                src: ['**/*.js'],
                dest: 'service/'
            },{
                expand: true,
                cwd: 'client/scripts/lib',
                src: ['**/*.js'],
                dest: 'lib/'
            },{
                expand: true,
                cwd: 'client/scripts/data',
                src: ['**/*.js'],
                dest: 'data/'
            },{
                expand: true,
                cwd: 'client/scripts/config',
                src: ['**/*.js'],
                dest: 'config/'
            }
        ]
    };

    grunt.config.set('browserify', {
        options: {
            debug: true
        },

        appDev: {
            files: appFiles,
            options: appOptions
        },

        appProd: {
            files: appFiles,
            options: _.extend({
                preBundleCB: function (b) {
                    b.plugin(minifyify, {
                        map: 'app.min.js.map',
                        output: 'web/scripts/app.min.js.map'
                    });
                }
            }, appOptions)
        }
    });

    grunt.registerTask('browserify:dev', [
        'browserify:appDev'
    ]);

    grunt.registerTask('browserify:prod', [
        'browserify:appProd'
    ]);

    return grunt;
};
