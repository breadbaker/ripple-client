module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-jscs');

    grunt.config.set('jscs', {
        options: {
            config: '.jscsrc'
        },
        all: {
            src: [
                'client/**/*.js',
                'server/**/*.js'
            ]
        }
    });
};
