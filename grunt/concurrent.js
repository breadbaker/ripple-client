'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.config.set('concurrent', {
        dev: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    return grunt;
};
