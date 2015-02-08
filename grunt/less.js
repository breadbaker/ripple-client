'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');

    var files = [{
        src: 'client/styles/style.less',
        dest: 'server/web/styles/style.css'
    }];

    grunt.config.set('less', {
        dev: {
            files: files
        },

        prod: {
            files: files,
            options: {
                cleancss: true
            }
        }
    });

    return grunt;
};
