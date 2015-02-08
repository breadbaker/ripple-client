'use strict';

var path = require('path');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-nodemon');

    grunt.config.set('nodemon', {
      server: {
        script: 'server/index.js',
        options: {
          nodeArgs: ['--debug'],
          watch: ['server'],
        }
      }
    });
};
