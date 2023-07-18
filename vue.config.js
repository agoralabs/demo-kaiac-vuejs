const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})

/*
module.exports = {
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    }
  }
}
*/
