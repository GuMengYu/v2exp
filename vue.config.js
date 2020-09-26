const {port} = require('./config/local.config');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
    devServer: {
      disableHostCheck: true,
      port: port,
    },
  },
};