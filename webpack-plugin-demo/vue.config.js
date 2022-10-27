// let target = "正式地址";
var webpack = require("webpack");
// console.log(process.env.NODE_ENV !== "production");
var MyWebpackPlugin = require("./my-webpack-plugin.js");

const isDev = process.argv[2] !== "build";

const buildVersion = new Date().getTime();
const publicPath = isDev ? "/" : `/${buildVersion}`;
const indexPath = isDev ? "index.html" : "../index.html";
const baseOutPutPath = "dist";
const outputDir = isDev ? baseOutPutPath : `${baseOutPutPath}/${buildVersion}`;

console.log("---dev", isDev, process.argv);

module.exports = {
  // assetsDir: "static",
  publicPath, //"/2022",
  indexPath, //"../index.html",
  outputDir, //"dist/2022",
  filenameHashing: true,
  lintOnSave: false,
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    extract: {
      filename: "css/[name].[hash:5].css",
      chunkFilename: "css/[chunkhash:5].[contenthash:5].css",
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: false,
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
      }),
      new MyWebpackPlugin({
        baseOutPutPath,
        buildVersion,
      }),
    ],
    output: {
      filename: "js/[name].[hash:7].js",
      chunkFilename: "js/[hash:5].[contenthash:5].js",
    },
  },
};
