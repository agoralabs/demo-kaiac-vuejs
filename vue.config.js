const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    proxy: "http://localhost:8081"
  },
  transpileDependencies: [
    'vuetify'
  ]
})

/*
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    }
  }
}
*/
