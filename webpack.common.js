const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.template.html",
      title: "Restaurant Page | An Odin Project",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        oneOf: [
          {
            // if the import url looks like "some.png?srcset..."
            use: [
              {
                loader: "webpack-image-srcset-loader",
                options: {
                  sizes: ["200w", "original"],
                },
              },
              "file-loader",
              "webpack-image-resize-loader",
              // add webpack-sharp-loader if you want to pre-process your image e.g. rotating, flipping
            ],
          },
          {
            // if no previous resourceQuery match
            use: "file-loader",
          },
        ],
      },
    ],
  },
};
