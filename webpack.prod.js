const path = require('path');
const { merge } = require('webpack-merge');
const common = require ('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: "bundle-[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "bundle-[contenthash].css",
}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`, //syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      new CssMinimizerPlugin(),
    ],
  },
});