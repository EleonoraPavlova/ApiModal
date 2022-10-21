const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/ApiModal/" : "/",
  // if has been blocked by CORS policy:
  devServer: {
    proxy: {
      '^/api/workflow': {
        target: 'http://localhost:3003/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api/workflow': '/'
          // '/api/messages': '/messages'
        }
      },
      '^/api/': {
        target: 'https://staging.harritydev.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
