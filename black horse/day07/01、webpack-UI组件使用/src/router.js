// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 导入模块 account
import account from './main/account.vue'
// 导入模块 goodslist
import goodslist from './main/goodslist.vue'
// 导入login
import login from './subcom/login.vue'
// 导入register
import register from './subcom/register.vue'

// 3.创建路由对象
var router = new VueRouter({
  routes: [
    // account goodslist
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})

export default router