'use strict';

const { baseProvider } = require('./helpers');
const builder = require('./providers');

const { DevToolMixin, FileNameMixin, HookMixin, InputMixin, OutputMixin } = require('./providers/mixins');
const { AssetsLoader, BabelLoader, CssLoader, EsLintLoader, JsonLoader } = require('./providers/loaders');
const {
  NoErrorPlugin,
  DefinePlugin,
  HTMLPlugin,
  DevServer,
} = require('./providers/plugins');

builder(
  baseProvider(),
  [
    AssetsLoader,
    BabelLoader,
    CssLoader,
    EsLintLoader,
    JsonLoader,
  ],
  [
    DevToolMixin(true),
    InputMixin({
      vendor: ['./client/vendor.js'],
      app: ['./client/index.jsx', './client/critical.css'],
    }),
    OutputMixin('./dist'),
    FileNameMixin('[name].[chunkhash:8].js'),
    HookMixin({
      start: () => console.log('[REACT YING YANG] Server start !'),
      stop: () => console.log('[REACT YING YANG] Server end !'),
    }),
    DevServer('http://localhost', 3000),
  ],
  [
    DashboardPlugin,
    DefinePlugin('development'),
    HTMLPlugin,
    HotModuleReplacementPlugin,
    NoErrorPlugin,
    BrowserPlugin('http://localhost', 3000)
  ]
);
