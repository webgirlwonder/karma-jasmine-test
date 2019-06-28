const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '.',
    autoWatch: false,
    singleRun: true,
    browsers: [ 'Chrome' ],
    frameworks: [ 'jasmine' ],
    files: [
      './src/test.js',
    ],
    preprocessors: {
      './src/**/*.js': [ 'webpack' ],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'error-only',
    },
    // reporters: [ 'coverage', 'progress', 'mocha' ],
    // coverageReporter: {
    //   includeAllSources: true,
    //   reporters: [
    //     { type: 'html', subdir: 'reports' },
    //     { type: 'lcovonly', subdir: '.', file: 'reports/lcov.txt' },
    //     { type: 'cobertura', subdir: '.', file: 'reports/cobertura.xml' },
    //     { type: 'text-summary' },
    //   ],
    //   dir: `./_test`,
    // },
  });
};