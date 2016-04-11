var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {
  context: __dirname,

  entry: {
    app: './src/app'
  },

  output: {
      path: path.resolve('./www/assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new CleanWebpackPlugin(['bundles'], {
      root: path.resolve('./www/assets/'),
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
    new HtmlWebpackPlugin({
      filename: path.resolve('./www/index.html'),
      template: path.resolve('./src/webpack-template-index.html'),
      inject: 'head',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
    }),
    new webpack.optimize.DedupePlugin(),
  ],

  module: {
    loaders: [
      {
          test: /\.html$/,
          loader: 'html'
      },
      {
          test: /\.json$/,
          loader: "json"
      },
      { test: /\.js$/, exclude: /node_modules|bower_components/, loader: "ng-annotate!babel-loader"},
      // Extract css files
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
          test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
          loader: 'file?name=fonts/[name].[ext]'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', 'scss'],
    pkg: pkg,
    root: path.resolve('./src'),
  },

  // here's how to add source maps
  // devtool: 'source-map',
}
