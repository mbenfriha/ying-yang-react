'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const wrapper = filename => new ExtractTextPlugin(filename);

module.exports = wrapper;
