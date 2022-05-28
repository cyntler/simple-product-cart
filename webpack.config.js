const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (_env, { mode }) => {
  const isDev = mode === 'development';

  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: resolve('./public/webapp'),
      filename: 'bundle.js',
      publicPath: '/webapp/',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        favicon: resolve('./src/assets/favicon.png'),
      }),
      new VueLoaderPlugin(),
      isDev &&
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:3333',
          notify: false,
        }),
    ],
  };
};
