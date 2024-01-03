const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  inject: true,
  favicon: "./public/favicon.ico",
  manifest: "./public/manifest.json"
});
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    static: [
      { directory: path.join(__dirname, "dist") },
      { directory: path.join(__dirname, "public") }
    ],
    port: 3000,
    historyApiFallback: {
      index: "./public/index.html"
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Login",
      filename: "remoteEntry.js",
      remotes: {
        Shared: "Shared@http://localhost:3001/remoteEntry.js"
      }
    })
  ]
};
