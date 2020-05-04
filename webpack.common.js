const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "./",
    filename: "bundle.[chunkhash].js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "ts-loader"
      },
      {
        test: /.css?$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ]
};