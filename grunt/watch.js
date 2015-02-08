module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config.set('watch', {
        jscs: {
            files: [
                'client/**/*.js'
            ],
            tasks: ['jscs']
        },

        browserify: {
            files: [
                './client/scripts/**/*.js',
                '!client/scripts/vendor/**/*.js'
            ],
            tasks: [
                'browserify:appDev',
                'notify:build'
            ],
            options: {
                debug: true
            }
        },

        copy: {
            files: ['server/index.html'],
            tasks: ['copy:dev']
        },

        less: {
            files: [
                'client/styles/**/*.less'
            ],
            tasks: [
                'less:dev', 'notify:build'
            ]
        }
    });
};