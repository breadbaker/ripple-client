module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.file.expand('grunt/*.js').forEach(function (task) {
        require('./' + task)(grunt);
    });

    grunt.registerTask('default', [
        'handlebars',
        'browserify:dev',
        'copy:dev',
        'less:dev',
        'concurrent:dev'
    ]);
};
