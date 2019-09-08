import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 导入模块 app
import app from './app.vue'
// 2.手动挂载 VueRouter
Vue.use(VueRouter)

// 导入自定义路由模块
import router from './router'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
