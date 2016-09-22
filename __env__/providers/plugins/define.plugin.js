'use strict';

const { DefinePlugin } = require('webpack');

const wrapper = (env, extra = {}) =>
  new DefinePlugin(
    Object.assign(
      { 'process.env.NODE_ENV': JSON.stringify(env) },
      extra
    )
  );

module.exports = wrapper;
