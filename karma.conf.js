//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 11/03/2016
//                   isusk246@gmail.com
//
//




module.exports = function karmaConfig (config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha', 'chai'
    ],
    reporters: [
      'spec',
      'coverage'
    ],
    files: [
      'src/index.js',
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/index.js': ['webpack', 'sourcemap'],
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },
    colors: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};