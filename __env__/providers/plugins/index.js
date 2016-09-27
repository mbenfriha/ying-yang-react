'use strict';

const AssetsPlugin = require('./assets.plugin.js');
const BrowserPlugin = require('./browser.plugin.js');
const ChunkPlugin = require('./chunk.plugin.js');
const DashboardPlugin = require('./dashboard.plugin.js');
const DefinePlugin = require('./define.plugin.js');
const DevToolPlugin = require('./dev-tool.plugin.js');
const ExtractCssPlugin = require('./extract-css.plugin.js');
const HmrPlugin = require('./hmr.plugin.js');
const HtmlPlugin = require('./html.plugin.js');
const InlineCssPlugin = require('./inline-css.plugin.js');
const MinifyPlugin = require('./minify.plugin.js');
const NoErrorPlugin = require('./no-error.plugin.js');
const ProgressBarPlugin = require('./progress-bar.plugin.js');

module.exports = {
  AssetsPlugin,
  BrowserPlugin,
  ChunkPlugin,
  DashboardPlugin,
  DefinePlugin,
  DevToolPlugin,
  ExtractCssPlugin,
  HmrPlugin,
  HtmlPlugin,
  InlineCssPlugin,
  MinifyPlugin,
  NoErrorPlugin,
  ProgressBarPlugin,
};
