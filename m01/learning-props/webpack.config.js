'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  // ferramenta para debugar
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',

    // utilizado assim para rodar em qualquer SO, sistemas unix utilizam -> / enquanto windows -> \
    path.join(__dirname, 'src', 'index'),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  // configuração do babel
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
})