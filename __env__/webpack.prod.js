'use strict';

const { baseProvider } = require('./helpers');
const builder = require('./providers');

const { DevToolMixin, InputMixin, OutputMixin } = require('./providers/mixins');
const { AssetsLoader, BabelLoader, CssLoader, EsLintLoader, JsonLoader } = require('./providers/loaders');
const {
  AssetsPlugin,
  ChunkPlugin,
  DefinePlugin,
  ExtractCssPlugin,
  HtmlPlugin,
  MinifyPlugin,
  ProgressBarPlugin,
} = require('./providers/plugins');

module.exports = builder(
  baseProvider(),
  [
    DevToolMixin(false),
    InputMixin({
      vendor: ['./client/vendor.js'],
      app: ['./client/index.jsx', './client/critical.css'],
    }),
    OutputMixin('./dist', '[name].[chunkhash:8].js'),
  ],
  [
    AssetsLoader,
    BabelLoader,
    CssLoader,
    EsLintLoader,
    JsonLoader,
  ],
  [
    ProgressBarPlugin(),
    AssetsPlugin('/'),
    ChunkPlugin(),
    DefinePlugin('production'),
    ExtractCssPlugin('[name].[contenthash:8].css'),
    HtmlPlugin('index.html', './client/index.html'),
    MinifyPlugin(),
  ]
);
