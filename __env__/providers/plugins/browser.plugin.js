'use strict';

const WebpackBrowserPlugin = require('webpack-browser-plugin');

const wrapper = (url, port) => provider => new WebpackBrowserPlugin({ url, port });

module.exports = wrapper;
