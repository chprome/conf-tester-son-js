module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-testem');
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

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('test-testem', ['testem:ci:integration', 'testem:ci:unit']);
    grunt.registerTask('test-karma', ['karma:integration', 'karma:unit']);
};