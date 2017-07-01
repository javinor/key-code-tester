'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  devServer: { contentBase: path.resolve(__dirname, 'docs') },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]' },
      { test: /\.(eot|ttf|svg|gif|png)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html'
    })
  ]
}
