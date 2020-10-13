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
};