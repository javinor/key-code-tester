'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  devServer: { contentBase: path.resolve(__dirname, 'docs') },
  module: {
    loaders: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}) },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']} },
      // { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      // { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]' },
      { test: /\.(eot|ttf|svg|gif|png)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    })
  ]
}
