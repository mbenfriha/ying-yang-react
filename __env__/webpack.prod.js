'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const helpers = require('./providers/helpers');
const core = require('./providers/core');
const provider = require('./providers/config');

provider.devtool = false;
provider.output.filename = '[name].[chunkhash:8].js';

provider.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('[name].[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    comments: false,
  }),
  new AssetsPlugin({ filename: `${core.assets_path}assets.json` })
);

/**
 * CSS Extraction in production
 */
provider
  .module
  .loaders
  .filter(helpers.loaderPredicate())
  .forEach(loader => {
    loader.loader = ExtractTextPlugin.extract(loader.loaders);

    delete loader['loaders'];
  });

module.exports = provider;
