/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkWebpackPlugin = require('fixed-webpack4-html-webpack-inline-chunk-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production';

  return {
    mode: isDevelopment ? 'development' : 'production',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      path: path.join(__dirname, '/dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        }
      ]
    },
    devtool: isDevelopment
      ? 'cheap-module-eval-source-map'
      : 'cheap-module-source-map',
    optimization: {
      runtimeChunk: {
        name: 'runtime'
      },
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/
          }
        },
        name: false
      }
    },
    performance: {
      hints: isDevelopment ? false : 'error',
      maxEntrypointSize: 300_000
    },
    plugins: [
      new HtmlWebpackPlugin({
        minify: isDevelopment
          ? false
          : {
              collapseWhitespace: true,
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            },
        template: './src/index.html'
      }),
      new InlineChunkWebpackPlugin({
        inlineChunks: ['runtime'],
        quiet: true
      }),
      ...(isDevelopment
        ? []
        : [
            new CompressionPlugin({
              algorithm: 'brotliCompress',
              compressionOptions: { level: 11 },
              filename: '[path].br[query]',
              test: /\.(js|css|html|svg)$/
            })
          ]),
      ...(isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : [])
    ],
    stats: {
      assetsSort: '!size',
      builtAt: false,
      children: false,
      entrypoints: false,
      errors: true,
      errorDetails: true,
      hash: false,
      modules: false,
      timings: false
    },
    devServer: {
      contentBase: 'dist',
      historyApiFallback: true,
      hot: true,
      port: 7001
    }
  };
};
