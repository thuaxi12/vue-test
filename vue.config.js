module.exports = {
    lintOnSave: false,//关闭语法检查
    //开启代理服务器(方式一)
    /* devServer: {
      proxy: 'http://localhost:5002'
    } */
    //开启代理服务器(方式二)
    devServer: {
      proxy: {
        '/thuaxi': {//请求前缀
          target: 'http://localhost:5002',
          pathRewrite:{'^/thuaxi':''},
          // ws: true,// 用于支持websocked
          // changeOrigin: true//用于控制请求头中的host
        },
        '/demo': {//请求前缀
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''},
          // ws: true,// 用于支持websocked
          // changeOrigin: true//用于控制请求头中的host
        }
      }
    }
  }