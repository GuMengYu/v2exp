module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
    devServer: {
      disableHostCheck: true,
    },
  },
};