'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const provider = require('./providers');
const { output, extraGlobalPlugins } = require('./providers/config');
const { isLoader } = require('./providers/helpers');

provider.devtool = false;
provider.output.filename = '[name].[chunkhash:8].js';

provider.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('[name].[contenthash:8].css'),
  new webpack.DefinePlugin(
    Object.assign(
      { 'process.env.NODE_ENV': JSON.stringify('production') },
      extraGlobalPlugins
    )
  ),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.[chunkhash:8].js'
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    comments: false,
  }),
  new AssetsPlugin({ filename: `${output}assets.json` })
);

/**
 * CSS Extraction in production
 */
provider
  .module
  .loaders
  .filter(isLoader('css'))
  .forEach(loader => {
    loader.loader = ExtractTextPlugin.extract(loader.loaders);

    delete loader['loaders'];
  });

module.exports = provider;
