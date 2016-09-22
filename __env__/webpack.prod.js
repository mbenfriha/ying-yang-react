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

// Provider, Mixins, Loaders and Plugins
module.exports = builder(
  baseProvider(),
  [
    DevToolMixin(false),
    InputMixin({
      vendor: ['./client/vendor.js'],
      app: ['./client/index.jsx', './client/critical.css'],
    }),
    OutputMixin('./dist/', '[name].[chunkhash:8].js'),
  ],
  [
    AssetsLoader,
    BabelLoader,
    CssLoader,
    EsLintLoader,
    JsonLoader,
  ],
  [
    DefinePlugin('production'),
    ProgressBarPlugin(),
    ChunkPlugin(),
    MinifyPlugin(),
    AssetsPlugin('./dist/'),
    ExtractCssPlugin('[name].[contenthash:8].css'),
    HtmlPlugin('./client/index.html'),
  ]
);
