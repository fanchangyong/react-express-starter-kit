const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  mode: 'development',
  entry: {
    index: paths.appIndexJs,
  },
  devtool: 'inline-source-map',
  output: {
    path: paths.appBuild,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx|mjs)$/],
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          cacheDirectory: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React',
      template: './build/index.html',
    }),
  ],
  devServer: {
  },
};
