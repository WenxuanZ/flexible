
module.exports = {
  runtimeCompiler: true,
  css:{
    loaderOptions:{
      postcss:{
        plugins:[
          require('postcss-pxtorem')({
            rootValue:37.5
          })
        ]
      }
    }
  }
}
