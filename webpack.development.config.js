const resolve = require("path").resolve;
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.config = {
  watch: true,
  devtool: "source-map",
  devServer: {
    port: 4444,
    contentBase: resolve(__dirname, "public_content"),
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    compress: true,
    hot: true,
    historyApiFallback: true
  }
};

module.exports.plugins = [
  new MiniCssExtractPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

module.exports.rules = [
  {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true
        }
      },
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]"
          },
          sourceMap: false
        }
      },
      { loader: "sass-loader" }
    ]
  }
];
