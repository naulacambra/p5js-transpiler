const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/p5js-transpiler/" : "/",
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  }
};
