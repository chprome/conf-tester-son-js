module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({

        // http server
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    hostname: '',
                    base: './'
                }
            }
        },

        testem: {
            unit: {
                options: {
                    reporter: 'tap',
                    framework : "mocha+chai",
                    launch_in_dev : ["chrome", "firefox"],
                    launch_in_ci : ["chrome", "firefox"]
                },
                src: [
                    "./js/Model.js",

                    "./test/unit/specs/ModelTest.js"
                ]
            },
            integration: {
                options: {
                    reporter: 'tap',
                    framework : "mocha+chai",
                    launch_in_dev : ["chrome", "firefox"],
                    launch_in_ci : ["Chrome", "firefox"]
                },
                src: [
                    "./js/Controller.js",
                    "./js/Model.js",
                    "./js/View.js",
                    "./js/App.js",

                    "./test/integration/integrationTest.js"
                ]
            }
        },

        browserify: {
            'client/packaged/App.js': 'client/src/js/App.js',
            'client/test/unit/packaged/ModelTest.js': 'client/test/unit/specs/ModelTest.js',
            'client/test/integration/packaged/integrationTest.js': 'client/test/integration/specs/integrationTest.js'
        },

        clean: [
            'client/packaged/*',
            'client/test/unit/packaged/*'
        ],

        watch: {
            build: {
                files: ['client/src/js/**/*.js', 'client/test/unit/specs/*.js', 'client/test/integration/specs/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false,
                }
            }
        },

        karma: {
            unit: {
                options: {
                    singleRun: true,
                    files: [
                        './js/Model.js',
                        './test/unit/specs/ModelTest.js'
                    ],
                    frameworks: ['mocha', 'chai', 'sinon'],
                    browsers: ['Chrome', 'Firefox'],
                    autoWatch: true,
                    plugins: [
                        'karma-mocha',
                        'karma-chai',
                        'karma-sinon',
                        'karma-chrome-launcher',
                        'karma-firefox-launcher'
                    ]
                }
            },
            integration: {
                options: {
                    singleRun: true,
                    files: [
                        './js/Model.js',
                        './js/View.js',
                        './js/Controller.js',
                        './js/App.js',
                        './test/integration/integrationTest.js'
                    ],
                    frameworks: ['mocha', 'chai', 'sinon'],
                    browsers: ['Chrome', 'Firefox'],
                    autoWatch: true,
                    plugins: [
                        'karma-mocha',
                        'karma-chai',
                        'karma-sinon',
                        'karma-chrome-launcher',
                        'karma-firefox-launcher'
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', ['clean', 'browserify', 'watch:build']);
    grunt.registerTask('default', ['build']);

    grunt.registerTask('test-testem', ['testem:ci:integration', 'testem:ci:unit']);
    grunt.registerTask('test-karma', ['karma:integration', 'karma:unit']);
};