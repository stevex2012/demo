const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '6789',
      template: path.resolve(__dirname, './public/index.ejs'),
      templateParameters: {
        CDP_UPLOAD_URL: 'nvhennvvv',
      },
    }),
  ],
}
