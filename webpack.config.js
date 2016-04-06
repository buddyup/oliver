var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');


var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {
  context: __dirname,

  entry: {
    app: './www/js/app'
  },

  output: {
      // path: path.resolve('./assets/bundles/'),
      path: path.resolve('./www/assets/bundles/'),
      // filename: "[name]-[hash].js",
      filename: "[name].js",
  },

  plugins: [
    new CleanWebpackPlugin(['bundles'], {
      root: path.resolve('./www/assets/'),
      verbose: true,
      dry: false
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
      { test: /\.js$/, exclude: /node_modules|bower_components/, loader: "ng-annotate!babel-loader"},
      // Extract css files
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
