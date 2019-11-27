const path = require('path');
const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: paths.appIndexJs,
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
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
  ],
  devServer: {
    contentBase: './build',
  }
};
