fis.match('_*.html', {
  //模板不进行发布
  release: false
})
/***************************测试环境************************************/
// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });
fis.match('*.html', {
    useMap: true
});
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
})
// .match('/pages/js/*.js',{
//   isMod:true
// })

.match('*.scss',{
  //sacc转换成css
  rExt: '.css', // from .scss to .css
  parser: fis.plugin('sass',{

  })
})

.match('::package', {
  // 启用css图片压缩
  spriter: fis.plugin('csssprites')
})

.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  useHash: true,
  optimizer: fis.plugin('uglify-js')
})

.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
})
.match('*.{scss,css,js}', {
  // 加md5
  useHash: true
})
fis.media('debug').match('*.{js,scss,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})
.match('*.scss',{
  //sacc转换成css
  rExt: '.css', // from .scss to .css
  parser: fis.plugin('sass',{

  })
})



/*****************************************************************/
