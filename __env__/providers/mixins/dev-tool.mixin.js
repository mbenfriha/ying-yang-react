'use strict';

const wrapper = hasDevTool => ({
  devTool: hasDevTool ? 'cheap-eval-source-map' : false,
});

module.exports = wrapper;
