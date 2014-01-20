module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: ['Gruntfile.js', 'backend/**/*.js'],
        },

        watch: {
            dev: {
                files: ['<%= jshint.files %>', '<%= qunit.files %>'],
                tasks: ['jshint', 'qunit'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath){
        grunt.config('jshint.files', filepath);
        grunt.config('qunit.files', filepath);
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['watch:dev']);
};