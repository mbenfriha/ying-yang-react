'use strict';

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const wrapper = () => new ProgressBarPlugin();

module.exports = wrapper;
