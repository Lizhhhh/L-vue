// 入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'

// 1.2 安装路由
Vue.use(VueRouter)

// 1.3 导入自己的router.js模块
import router from './router.js'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'

// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径

// 导入格式化时间的插件
import moment from 'moment'

// 全局的过滤器
Vue.filter('dateFormat', (str, pattern = "YYYY-MM-DD HH:mm:ss") => {
    return moment(str).format(pattern);
})


// 导入 App 根组件
import app from './app.vue'

// 导入 MUI样式
import './lib/mui/css/mui.css'

// 导入 MUI 扩展样式


// mint-ui 部分导入
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})