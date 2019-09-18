// 1.导入 vue-router 包
import VueRouter from 'vue-router'

// 2.导入对应的路由组件
import HomeContainer from './lib/components/tabbar/HomeContainer.vue'
import MemberContainer from './lib/components/tabbar/MemberContainer.vue'
import ShopcarContainer from './lib/components/tabbar/ShopcarContainer.vue'
import SearchContainer from './lib/components/tabbar/SearchContainer.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        // 配置路由规则
    ],
    linkActiveClass: 'mui-active'
})

export default router