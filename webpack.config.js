const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true
  }
};
