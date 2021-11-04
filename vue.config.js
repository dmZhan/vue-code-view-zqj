/*
 * @Author: your name
 * @Date: 2021-11-04 10:50:47
 * @LastEditTime: 2021-11-04 13:37:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-code-view\vue.config.js
 */
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH || "/",
  productionSourceMap: false,
  outputDir: process.env.VUE_APP_ENV === "deploy" ? "deploy" : "dist",
  configureWebpack: (config) => {
    // 项目入口
    config.entry.app = "./examples/main.js";
  },
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("examples"))
      .set("@assets", resolve("examples/assets"))
      .set("@src", resolve("src"))
      .set("@views", resolve("examples/views"))
      .set("@router", resolve("examples/router"))
      .set("@store", resolve("examples/store"));
  },
};
