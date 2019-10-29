import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptor from './interceptor'

Vue.config.productionTip = false

// 拦截器的初始化


const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


interceptor(app);