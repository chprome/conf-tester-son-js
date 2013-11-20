// an example karma.conf.js
module.exports = function (config) {
    config.set({
        files: [
            '../../packaged/App.js',
            './integrationTest.js'
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
    });
};
