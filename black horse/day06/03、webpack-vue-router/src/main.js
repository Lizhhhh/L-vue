import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'

// 2.手动挂载 VueRouter
Vue.use(VueRouter)

// 导入模块 app
import app from './app.vue'
// 导入模块 account
import account from './main/account.vue'
// 导入模块 goodslist
import goodslist from './main/goodslist.vue'

// 3.创建路由对象
var router = new VueRouter({
  routes: [
    // account goodslist
    { path: '/account', component: account },
    { path: '/goodslist', component: goodslist }
  ]
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
