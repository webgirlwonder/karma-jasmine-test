module.exports = function (config) {
  config.set({
    basePath: '.',
    autoWatch: false,
    singleRun: true,
    browsers: ['Chrome'],
    customLaunchers: {
      IE_no_addons: {
        base: 'IE',
        flags: ['-extoff']
      }
    },
    frameworks: [ 'jasmine', 'requirejs' ],
    files: [
      'src/test-main.js',
      {pattern: 'src/**/*.js', included: false},
    ],
     preprocessors: {
       'src/**/*.js': [ 'babel' ]
     }
  });
};