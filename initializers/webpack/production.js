import path from 'path';
import webpack from 'webpack';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const root = path.join(process.cwd(), 'src');

export default {
  devtool: 'source-map',

  entry: {
    bundle: './src/index.js',
  },

  output: {
    path: path.join(process.cwd(), 'src', 'static', 'assets'),
    filename: '[name].[chunkhash].js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        })
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
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|ru)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (
        module.context && module.context.indexOf('node_modules') !== -1
      ),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map',
    }),
    new BundleAnalyzerPlugin({
      analyzeMode: 'static',
    })
  ]
};
