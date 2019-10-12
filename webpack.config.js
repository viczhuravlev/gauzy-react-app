/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  stats: {
    errors: true,
    errorDetails: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
