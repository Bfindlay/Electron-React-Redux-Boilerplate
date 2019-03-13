const path = require('path');
let webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  entry: ["babel-polyfill", './src/index.js'],
  devtool: '',
  vendor: ['react', 'moment', 'lodash/core'],
  output: {
    path: path.join(__dirname, 'src/dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      // Eliminate comments
      comments: false,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        drop_console: true,
        unsafe: true,
        unsafe_comps: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  query: {
    presets: ['react']
  }
}
