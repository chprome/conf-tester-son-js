// an example karma.conf.js
module.exports = function (config) {
    config.set({
        files: [
            '../../js/Model.js',
            '../../js/View.js',
            '../../js/Controller.js',
            '../../js/App.js',
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
