'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');

    var indexFile = [
        {
            expand: true,
            cwd: 'server/',
            src: ['index.html'],
            dest: 'server/web'
        }
    ];

    grunt.config.set('copy', {
        jsDev: {
            files: [
                {
                    expand: true,
                    cwd: 'client/',
                    src: ['**/development/**/*.js', '**/*.min.js', '**/*.map'],
                    dest: 'server/web'
                }
            ]
        },

        jsProd: {
            files: [
                {
                    expand: true,
                    cwd: 'client/',
                    src: ['**/*.min.js', '**/*.map'],
                    dest: 'server/web'
                }
            ]
        },

        indexDev: {
            files: indexFile,
            options: {
                process: function (content, srcpath) {
                    return replaceMarks('DEVELOPMENT', 'PRODUCTION', content);
                }
            }
        },

        indexProd: {
            files: indexFile,
            options: {
                process: function (content, srcpath) {
                    return replaceMarks('PRODUCTION', 'DEVELOPMENT', content);
                }
            }
        }
    });

    grunt.registerTask('copy:dev', [
        'copy:jsDev',
        'copy:indexDev'
    ]);

    function replaceMarks(includeMark, excludeMark, content) {
        content = content.replace(markRegExp(includeMark), '$1');
        content = content.replace(markRegExp(excludeMark), '');

        return content.replace(/%TIMESTAMP%/g, Date.now());


        function markRegExp(mark) {
            return new RegExp('%' + mark + '%([^]*)%/' + mark + '%', 'g');
        }
    }


    return grunt;
};
