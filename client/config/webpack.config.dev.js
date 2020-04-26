const {
  styleLoader,
  cssLoaderWithoutModules,
  cssLoaderWithModules,
  postcssLoader,
  stylusLoader,
  babelLoader,
} = require('./loaders');
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
        use: [babelLoader],
      },
      {
        test: /\.css$/,
        use: [styleLoader, cssLoaderWithoutModules, postcssLoader],
      },
      {
        test: /\.cm\.styl$/,
        use: [styleLoader, cssLoaderWithModules, postcssLoader, stylusLoader],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React',
      template: paths.appHtml,
    }),
  ],
  devServer: {
    index: '',
    proxy: [{
      context: ['/api', '/images', '/'],
      target: 'http://localhost:8001',
    }],
  },
};
