'use strict';

const { baseProvider, run } = require('./helpers');
const builder = require('./providers');

const { InputMixin, OutputMixin } = require('./providers/mixins');
const { AssetsLoader, BabelLoader, CssLoader, EsLintLoader, JsonLoader } = require('./providers/loaders');
const {
  AssetsPlugin,
  ChunkPlugin,
  DefinePlugin,
  DevToolPlugin,
  ExtractCssPlugin,
  HtmlPlugin,
  MinifyPlugin,
  ProgressBarPlugin,
} = require('./providers/plugins');

// Provider, Mixins, Loaders and Plugins
run(builder(
  baseProvider(),
  [
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
    AssetsPlugin('./dist/'),
    ChunkPlugin(),
    DefinePlugin('production'),
    DevToolPlugin(false),
    ExtractCssPlugin('[name].[contenthash:8].css'),
    HtmlPlugin('./client/index.html'),
    MinifyPlugin(),
    ProgressBarPlugin(),
  ]
));
