// an example karma.conf.js
module.exports = function (config) {
    config.set({
        files: [
            '../../src/js/Model.js',
            '../../src/js/View.js',
            '../../src/js/Controller.js',
            '../../src/js/App.js',
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
