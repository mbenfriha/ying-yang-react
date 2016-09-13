'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');
const helpers = require('./providers/helpers');
const core = require('./providers/core');
const provider = require('./providers/config');

provider.devtool = 'cheap-eval-source-map';
provider.output.publicPath = `http://localhost:${core.port}${core.assets_url}`;
provider.output.path = '/__tmp__/';

provider.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new DashboardPlugin()
);

/**
 * Add style loader in development
 */
provider
  .module
  .loaders
  .filter(helpers.loaderPredicate())
  .forEach(loader => {
    loader.loaders = ['style', ...loader.loaders];
  });

const compiler = webpack(provider);

compiler.apply(new DashboardPlugin());

const server = new WebpackDevServer(compiler, {
  hot: false,
  historyApiFallback: true,
  compress: true,
  quiet: false,
  noInfo: false,
  stats: { colors: true },
  publicPath: provider.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 50,
  },
});

server.listen(core.port, 'localhost', error => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(`===> Server started on http://localhost:${core.port}`);
});
