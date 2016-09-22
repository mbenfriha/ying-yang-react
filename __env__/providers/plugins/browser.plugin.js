'use strict';

const WebpackBrowserPlugin = require('webpack-browser-plugin');

const wrapper = (url, port) => new WebpackBrowserPlugin({ url, port });

module.exports = wrapper;
