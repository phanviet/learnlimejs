module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: ['Gruntfile.js', 'src/backend/**/*.js'],
        },

        watch: {
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath){
        grunt.config('jshint.files', filepath);
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['watch:jshint']);
};