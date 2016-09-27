'use strict';

const { LoaderOptionsPlugin } = require('webpack');

const wrapper = hasDevTool => provider =>
  new LoaderOptionsPlugin({
    debug: hasDevTool,
    devTool: hasDevTool ? 'cheap-eval-source-map' : false,
  });

module.exports = wrapper;
