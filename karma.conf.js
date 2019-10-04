module.exports = function (config) {
  config.set({
    basePath: '',
    autoWatch: false,
    singleRun: true,
    browsers: ['Chrome'],
    // customLaunchers: {
    //   IE_no_addons: {
    //     base: 'IE',
    //     flags: ['-extoff']
    //   }
    // },

    logLevel: config.LOG_INFO,

    port: 9876,

    frameworks: [ 'jasmine', 'requirejs' ],

    plugins: [
        'karma-jasmine',
        'karma-requirejs',
        'karma-chrome-launcher'
    ],

    files: [
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      'test/test-main.js'
    ],

    reporters: ['progress'],

    colors: true,

    captureTimeout: 60000
  });
};