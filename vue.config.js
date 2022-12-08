//const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  publicPath:process.env.NODE__ENV==='production'
  ?'/rockpaperscissors'
  :'/'
}
