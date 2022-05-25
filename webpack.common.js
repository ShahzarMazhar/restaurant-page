const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.template.html',
      title: 'Restaurant Page | An Odin Project',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    ],
  }
};