var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      filename: "[name].js",
      publicPath: "/assets/bundles/"
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
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
      {
          test: /\.scss$/, exclude: /node_modules|bower_components/,
          loader: 'style!css!sass'
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

  devtool: 'eval',
}
