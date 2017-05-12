const { resolve } = require('path')
const { getIfUtils } = require('webpack-config-utils')
const webpack = require('webpack')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)
  return {
    context: resolve('src'),
    entry: [
      './index.js'
    ],
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: ifNotProd()
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}