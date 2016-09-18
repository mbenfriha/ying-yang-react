'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const provider = require('./providers');
const { port, baseUrl, extraGlobalPlugins } = require('./providers/config');
const { isLoader, listen, provideServer } = require('./providers/helpers');

provider.devtool = 'cheap-eval-source-map';
provider.output.publicPath = `http://localhost:${port}${baseUrl}`;
provider.output.path = '/__tmp__/';

provider.plugins.push(
  new webpack.DefinePlugin(
    Object.assign(
      { 'process.env.NODE_ENV': JSON.stringify('development') },
      extraGlobalPlugins
    )
  ),
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new DashboardPlugin(),
  new WebpackBrowserPlugin({ url: 'http://localhost', port })
);

provideServer(provider);

provider
  .module
  .loaders
  .filter(isLoader('css'))
  .forEach(loader => {
    loader.loaders = ['style', ...loader.loaders];
  });

listen(new WebpackDevServer(webpack(provider), {
  hot: true,
  historyApiFallback: true,
  compress: true,
  quiet: true,
  noInfo: false,
  stats: { colors: true },
  publicPath: provider.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 50,
  },
}), 'localhost', port)
  .then(response => console.log(response))
  .catch(error => console.log(error));
