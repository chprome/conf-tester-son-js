// an example karma.conf.js
module.exports = function (config) {
    config.set({
        files: [
            './init.js',
            '../../packaged/App.js',
            './specs/*.js'
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
