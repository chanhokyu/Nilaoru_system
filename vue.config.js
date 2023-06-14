const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'./',
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint校验  
  devServer:{
    proxy:{
    "/user":{
      ws:false,
      target:"http://127.0.0.1:4523/m1/2858639-0-default",
      changeOrigin: true,
      pathRewrite:{
        "^/api":"",
      }
    }  
    },
    
  }
})
