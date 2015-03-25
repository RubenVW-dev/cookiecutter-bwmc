//add additional javascript vendor paths here
var jsVendors = [
    'bower_components/jquery/dist/jquery.min.js'
    ,'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ,'bower_components/modernizr/modernizr.js'
    ,'bower_components/underscore/underscore-min.js'
    ,'bower_components/respond/src/respond.js'
];

var jsApp = [
    'assets/js/classes/*.js',
    'assets/js/*.js'
];

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            compile:{
                files: [
                    'assets/less/**/*.less',
                    'assets/js/**/*.js',
                    'bower_components/**',
                ],
                tasks: [
                    'less',
                    'uglify',
                    'copy'
                ]
            },
            extra:{
                files:[
                    'assets/extra/**/*.js',
                    'assets/extra/**/*.css'
                ],
                tasks:[
                    'copy:css',
                    'copy:js'
                ]
            },
            push:{
                files:[
                    'src/img/**',
                    'src/fonts/**',
                    'src/js/**/*.js',
                    'src/css/*.css'
                ],
                tasks:[
                    'ftpush'
                ]
            }
        },

        ftpush: {
          build: {
            auth: {
              host:'{{cookiecutter.ftp_host}}',
              port: {{cookiecutter.ftp_port}},
              authKey:'key'
            },
            src: 'src',
            dest: '{{cookiecutter.remote_path}}/src',
            exclusions: [],
            keep: [],
            simple: true
          }
        },

        less: {
            main:{
                files: {
                    'src/css/style.css': 'assets/less/theme-{{cookiecutter.project_name}}.less'
                },
                options:{
                    cleancss: true
                }
            }
        },

        uglify:{
            main:{
                options:{
                    wrap: true,
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n\n(function() {\n\nvar <%= pkg.name %> = {}; \n\n',
                    footer: '\n\n})();'
                },
                files:{
                    'src/js/app.js': jsApp
                }
            }
        },

        copy:{
            main:{
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: jsVendors,
                        dest: 'src/js/vendor'
                    }
                ]
            },
            js:{
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['assets/extra/**/*.js'],
                        dest: 'src/js'
                    }
                ]
            },
            css:{
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['assets/extra/**/*.css'],
                        dest: 'src/css'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ftpush');

    grunt.registerTask('default', ['less', 'uglify', 'copy']);

};