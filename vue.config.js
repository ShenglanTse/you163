module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/index': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/index': ''
        }
      }
    }
  }
}
