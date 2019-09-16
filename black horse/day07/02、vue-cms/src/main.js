// 入口文件
import Vue from 'vue'

// 导入 App 根组件
import app from './app.vue'

// 导入 MUI样式
import './lib/mui/css/mui.min.css'

// mint-ui 部分导入
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)



var vm = new Vue({
    el: '#app',
    render: c => c(app)
})