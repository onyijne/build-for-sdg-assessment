
module.exports = {
  publicPath: '/af-build-for-sdg-assessment/',
  assetsDir: '',
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  }
};
