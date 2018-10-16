const {resolve} = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {babelrc: true},
        }, {
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        }],
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'TruSet Beta', template: './app/index.html'}),
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}
