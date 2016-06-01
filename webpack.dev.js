const webpack = require('webpack');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DefinePlugin = webpack.DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// server address
const SERVER_HOST = 'localhost';
const SERVER_PORT = '8000';

const devConfig = require('./webpack.common.config');

devConfig.plugins = (devConfig.plugins || []).concat(
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html'
    }),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity})
);

devConfig.entry.main = devConfig.entry.main.concat(`webpack-dev-server/client?http://${SERVER_HOST}:${SERVER_PORT}`);

devConfig.output.publicPath = '/';

devConfig.sassLoader.outputStyle = 'nested';

devConfig.devServer = {
  contentBase: './src',
  historyApiFallback: true,
  host: SERVER_HOST,
  inline: true,
  port: SERVER_PORT,
  publicPath: '/',
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};

module.exports = devConfig;