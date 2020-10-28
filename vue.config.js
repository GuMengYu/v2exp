const path = require('path');
const {port} = require('./config/local.config');
module.exports = {
  lintOnSave: true,

  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
    devServer: {
      disableHostCheck: true,
      port: port,
    },
  },
  outputDir: path.resolve(__dirname, 'docs'),
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
};
