//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 14/03/2016
//                   isusk246@gmail.com
//
//


const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'src'),
  imagesAssets: path.join(__dirname, 'src/assets'),
  build: path.join(__dirname, 'build'),
  develop: path.join(__dirname, 'build-develop'),
  test: path.join(__dirname, 'src')
};
const APP_TITLE = 'RojoJ';

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url-loader?limit=70000&name=assets/images/[name].[ext]'],
        include: PATHS.imagesAssets
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=70000&name=assets/fonts/[name].[ext]'
      },
      { test: /\.html$/, loader: 'raw', include: PATHS.app },
      {
        test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?minetype=application/pdf&name=[name].pdf',
        include: PATHS.app
      }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: '#eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      watchOptions: {
        poll: 1000
      },

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        // Define development specific CSS setup
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel?cacheDirectory'], include: PATHS.app },
        { test: /\.css$/, loaders: ['style', 'css']},
        { test: /\.scss$/, loader: 'style!css!postcss-loader!sass', include: PATHS.app }
      ]
    },
    postcss: function () {
      return [precss, autoprefixer({ browsers: ['last 4 versions'] })];
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        template: './templates/index.webpack.ejs',
        title: APP_TITLE
      }),
      new webpack.DefinePlugin({
        '__DEV__': JSON.stringify(JSON.parse('true'))
      }),
      new CopyWebpackPlugin([
        { from: PATHS.app + '/assets/images', to: './assets/images' }
      ])
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel'], include: PATHS.app },
        { test: /\.css$/, loaders: ['style', 'css']},
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss-loader!sass'), include: PATHS.app }
      ]
    },
    postcss: function () {
      return [precss, autoprefixer({ browsers: ['last 4 versions'] })];
    },
    plugins: [
      new Clean([PATHS.build], {
        verbose: true,
        dry: false
      }),
      // Output extracted CSS to a file
      new ExtractTextPlugin('styles.[chunkhash].css'),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': JSON.stringify(JSON.parse('false'))
      }),
      new HtmlwebpackPlugin({
        inject: true,
        template: './templates/index.production.ejs',
        title: APP_TITLE
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: PATHS.app + '/assets/images', to: './assets/images' }
      ])
    ]
  });
}

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    entry: {}, // karma will set this
    output: {}, // karma will set this
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'src': PATHS.app
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          query: {
            presets: ['airbnb'],
            plugins: ['transform-class-properties']
          },
          exclude: /(node_modules)/
        },
        { test: /\.json$/, loader: 'json' },
        { test: /\.scss$/, loader: 'style!css!sass'}
      ]
    },
    // This section is for Enzyme.js
    externals: {
      // 'jsdom': "window",
      'cheerio': "window",
      'react/addons': true,
      // 'react/lib/ReactContext': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    plugins: [
      new webpack.DefinePlugin({
        // Note: this is false for tests so that a) we are testing the real behaviour, and b) there are no artificial delays in AJAX requests.
        '__DEV__': JSON.stringify(JSON.parse('false'))
      }),
      new ForceCaseSensitivityPlugin()
    ]
  });
}
