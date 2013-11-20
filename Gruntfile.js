module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-testem');

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
        }
    });

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('test', ['testem:ci:integration', 'testem:ci:unit']);
};