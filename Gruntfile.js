module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    hostname: '',
                    base: './'
                }
            }
        }
    });

    grunt.registerTask('default', ['connect']);

};