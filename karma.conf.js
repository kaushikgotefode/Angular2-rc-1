module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.min.js',
      'karma.entry.js'
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.test'),

    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: [
      // 'Chrome',
      'PhantomJS'
    ]
  });
};
