'use strict';

const { baseProvider } = require('./helpers');
const builder = require('./providers');

const { DevToolMixin, InputMixin, OutputMixin } = require('./providers/mixins');
const { AssetsLoader, BabelLoader, CssLoader, EsLintLoader, JsonLoader } = require('./providers/loaders');
const {
  DashboardPlugin,
  NoErrorPlugin,
  DefinePlugin,
  HTMLPlugin,
  DevServer,
  BrowserPlugin,
} = require('./providers/plugins');

// Provider, Mixins, Loaders and Plugins
builder(
  baseProvider(),
  [
    DevToolMixin(true),
    InputMixin({
      vendor: ['./client/vendor.js'],
      app: ['./client/index.jsx', './client/critical.css'],
    }),
    OutputMixin('./dist', '[name].js', ''),
    DevServer('http://localhost', 3000),
  ],
  [
    AssetsLoader,
    BabelLoader,
    CssLoader,
    EsLintLoader,
    JsonLoader,
  ],
  [
    DefinePlugin('development'),
    NoErrorPlugin(),
    DashboardPlugin(),
    HTMLPlugin(),
    HotPlugin(),
    BrowserPlugin('http://localhost', 3000)
  ]
);
