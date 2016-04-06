/**
 * This config is used with local dev with webpack-dev-server serving the css/js.
 * Usage:
 *   npm run watch
 */

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = require('./webpack.config.js')



config.entry = {
  'auth': [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './www/js/app',
  ]
};

config.output.publicPath = 'http://localhost:3000/assets/bundles/';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(), // don't reload if there is an error
  new BundleTracker({filename: './webpack-stats.json'}),
  new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
  )
];

config.module.loaders = [
  { test: /\.jsx?$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'}, // to transform JSX into JS
  { test: /\.js$/, exclude: /node_modules|bower_components/, loader: "ng-annotate!babel-loader"},
  {
      test: /\.css$/,
      loader: "style!css"
  },
  {
      test: /\.sass$/, exclude: /node_modules|bower_components/,
      loader: 'style!css!sass'
  },
  {
      test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules|bower_components/,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
  }
];

module.exports = config
