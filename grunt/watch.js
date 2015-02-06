module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config.set('watch', {
        jscs: {
            files: [
                'src/**/*.js'
            ],
            tasks: ['jscs']
        }
    });
};
