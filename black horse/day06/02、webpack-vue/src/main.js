// 如何在 webpack 构建的项目中, 使用 vue 进行开发
// 1. 安装依赖 cnpm i vue@2.5.2 -S       (-S:是安装运行依赖)

// 下面的Vue只提供了 runtime-only的代码,未提供完整版本的vue
import Vue from 'vue'

// 包的查找规则
// 1.在项目根目录中查找 node_modules 的文件夹
// 2.在 node_modules 中根据包名,找对应的 vue 文件夹
// 3.在 vue 文件夹中, 找一个叫 package.json 的包配置文件
// 4.在 package.json 文件中, 查找一个main属性

// 改进：1.更改main属性中的依赖指向
// 改进: 2. 如下
// import Vue from '../node_modules/vue/dist/vue.js'

// 改进: 3.还是使用import Vue from 'vue', 在webpack.config.js 中进行alias配置
// resolve:{
//   alias:{
//     "vue$":'vue/dist/vue.js'
//   }
// }

// var login = {
//   template: '<h1>Login created by WEB Form</h1>'
// }

import login from './login.vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  render: c => c(login)
})

// webpack中如何使用 vue:
// 1. 安装vue 的包:  cnpm i vue -S
// 2. 由于在 webpack 中,推荐使用 . vue 这个组件模板文件定义组件, 所以需要安装能解析这种文件的loader cnpm i vue-loader vue-template-compiler -D
// 3. 在main.js 中导入 vue的包,  import Vue from 'vue'
// 4. 定义一个处理.vue 结尾的规则 { test: /\.vue$/, use: 'vue-loader' }
// 5. 导入需要的组件. import login from './login.vue'
// 6. 使用 render 渲染login.   render: c => c(login)

import m1 from './test'
// import { title } from './test'
import { title as title123 } from './test'
import { content } from './test'
console.log(m1)
console.log(title123)
console.log(content)
