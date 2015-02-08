'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-notify');

    grunt.config.set('notify',{
        build: {
            options: {
                title: 'Success',
                message: '<%= package %> build finished successfully.'
            }
        }
    });
};