// 1. 导入jqury
// import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'

// 使用import 语法,导入 css样式表
import './css/index.css'
// 注意: webpack,默认只能打包处理 JS 类型的文件, 无法处理 其他非 JS 类型的文件bundleRenderer.renderToStream
// 需要手动安装一些其他的 合适的 第三方 loader 加载器.

import './css/index.less'
import './css/index.scss'

$(function() {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634'
  })
})
