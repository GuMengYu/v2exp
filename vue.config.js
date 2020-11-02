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
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-VuetifyUI', // split vuetify into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vuetify(.*)/,
          },
          commons: {
            name: 'chunk-commons',
            test: path.resolve(__dirname, 'src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        '@component': path.resolve(__dirname, 'src/components'),
        '@util': path.resolve(__dirname, 'src/util'),
      },
    },
  },
  outputDir: path.resolve(__dirname, 'docs'),
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
};
