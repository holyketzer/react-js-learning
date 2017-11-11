/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
        ]
      },
      {
        test: /\.(eot|ttf|png|svg|woff|woff2)$/,
        loader: 'url-loader',
      }
    ]
  },

  resolve: {
    modules: [root, 'node_modules'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ]
};
