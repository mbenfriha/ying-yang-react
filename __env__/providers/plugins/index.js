'use strict';

const AssetsPlugin = require('./assets.plugin.js');
const BrowserPlugin = require('./browser.plugin.js');
const ChunkPlugin = require('./chunk.plugin.js');
const DashboardPlugin = require('./dashboard.plugin.js');
const DefinePlugin = require('./define.plugin.js');
const DevServer = require('./dev-server.plugin.js');
const ExtractCssPlugin = require('./extract-css.plugin.js');
const HtmlPlugin = require('./html.plugin.js');
const MinifyPlugin = require('./minify.plugin.js');
const NoErrorPlugin = require('./no-error.plugin.js');
const ProgressBarPlugin = require('./progress-bar.plugin.js');

module.exports = {
  AssetsPlugin,
  BrowserPlugin,
  ChunkPlugin,
  DashboardPlugin,
  DefinePlugin,
  DevServer,
  ExtractCssPlugin,
  HtmlPlugin,
  MinifyPlugin,
  NoErrorPlugin,
  ProgressBarPlugin,
};
