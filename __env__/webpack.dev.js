'use strict';

const { baseProvider, listen } = require('./helpers');
const builder = require('./providers');

const { InputMixin, OutputMixin } = require('./providers/mixins');
const { AssetsLoader, BabelLoader, CssLoader, EsLintLoader, JsonLoader } = require('./providers/loaders');
const {
  BrowserPlugin,
  DashboardPlugin,
  DefinePlugin,
  DevToolPlugin,
  HmrPlugin,
  HtmlPlugin,
  InlineCssPlugin,
  NoErrorPlugin,
} = require('./providers/plugins');

// Provider, Mixins, Loaders and Plugins
listen(builder(
  baseProvider(),
  [
    InputMixin({
      vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './client/vendor.js'],
      app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './client/index.jsx', './client/critical.css'],
    }),
    OutputMixin('/__tmp__/', '[name].js', 'http://localhost:3000/'),
  ],
  [
    AssetsLoader,
    BabelLoader,
    CssLoader,
    EsLintLoader,
    JsonLoader,
  ],
  [
    BrowserPlugin('http://localhost', 3000),
    DashboardPlugin(),
    DefinePlugin('development'),
    DevToolPlugin(true),
    HmrPlugin(),
    HtmlPlugin('./client/index.html'),
    InlineCssPlugin(),
    NoErrorPlugin(),
  ]
))('localhost', 3000)
  .then(response => console.log(response))
  .catch(error => console.log(error));
