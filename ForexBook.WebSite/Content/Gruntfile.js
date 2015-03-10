/* jshint node: true */
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),

        clean: {dist: ['dist/css/*.css','dist/images/*.png','dist/images/*.jpg','dist/images/*.gif','dist/js/*.js']},
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/main.min-v1.0.0.css': ['src/less/main.less'] 
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['./css/*.*','./images/*.*','./js/*.*'],
                        dest: 'dist/'
                    }
                ]
            }

        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: 'dist',
                    hostname: 'localhost'
                }
            }
        },

        watch: {
			files: ['src/*','src/js/*','src/less/*','src/css/*','src/images/*'],
			tasks: ['clean', 'less',  'copy']
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble-less');


    //grunt.loadNpmTasks('grunt-recess');
    // remove grunt-recess modules. because not supported my code

    grunt.loadNpmTasks('assemble');

    

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'less',  'copy','connect']);
   // grunt.registerTask('dist', ['clean', 'less',  'copy','assemble']);
    // Default task.
    //grunt.registerTask('default', ['test', 'dist']);

    grunt.registerTask('default', ['dist','watch']);

};
