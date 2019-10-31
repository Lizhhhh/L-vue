# 项目启动
  - npm run serve

# 安装vue-cli 3.0
  - 首先卸载老版本
    - npm uninstall vue-cli -g
  - 安装新版本
    - npm install -g @vue/cli
  - 查看版本
    vue -V

# 初始化一个vue项目
  - vue create demo01
  - npm install


# 使用cube-ui
  - vue add cube-ui

# 安装router
  - vue add router
  - 初始化路由,添加路由守卫
```
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        // 需要登录
        const token = localStorage.getItem('token');
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.path }
            })
        }
    } else { // 不需要登录验证.
        next();
    }
})

export default router
```

# 安装vuex
  - vue add vuex
  - 路由的状态保存

# 注销
  - 需要清除token缓存的两种情况:
    1. 用户主动注销
    2. token过期
  - 需要做的事情:
    1. 清空缓存
    2. 重置登录状态

# 深入理解令牌机制
  - Bearer Token 规范(前端)
    + 概念: 描述在HTTP访问OAuth2保护资源时如何使用令牌的规范
    + 特点: 令牌就是身份证明, 无需证明令牌的所有权
    + 具体规定: 在请求头部中定义Authorization
    ````
      Authorization: Bearer <token>
    ````

  - Json Web Token 规范(后端)
    + 概念: 令牌的具体定义方式
    + 规定: 令牌由三部分构成"头·载荷·签名"
    + 头: 包含加密算法、令牌类型等信息
    + 载荷: 包含用户信息、签发时间和过期时间等信息
    + 签名: 根据头、载荷及秘钥加密得到的哈希串

# http代理
  - vue.config.js
  ````
  configureWebpack:{
    devServer:{
      proxy:{
        '/api':{
          target:'http://127.0.0.1:3000',
          changeOrigin: true
        }
      }
    }
  }
  ````


  # service层的作用(前端)
    - 从服务器或获取的数据格式往往和前端业务所需的数据格式不同
    - 在service层将数据处理成需要的格式
    - 栗子
    - /src/service/goods.js
````
import axios from 'axios'

export default {
    getGoodsInfo() {
        return axios.get('/api/goods')
            .then(res => {
                const { code, data: goodsInfo, slider, keys } = res.data;
                // 数据的处理操作
                if (code) {
                    return { goodsInfo, slider, keys }
                } else{
                  return null
                }
            })
    }
}
````

# store文件
  - 用于管理页面所有数据的状态

# 路由 Vue-router
  - 单页应用的路由页面,都是前端控制,后端只负责提供数据
  - 一个简单的单页应用,使用vue-router,为了方便前后端公用路由,我们新建router.js对外暴露createRouter
````
npm i vue-router -s
````
  - router.js
````
import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/Index';
import Kkb from './components/Kkb'

Vue.use(Router)

export function createRouter () {
  return new Router({
    routes: [
      {path:"/", component:Index},
      {path:"/Kkb", component:Kkb}
    ]
  })
}
````
  - src/components/Index.vue
````
<template>
  <div>
    <h1>hi {{name }} </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'首页'
    }
  }
}
</script>
````
  - src/components/Kkb.vue
````
<template>
  <div>
    <h1>hi {{name}} </h1>
  </div>
</template>

<script>
export default {
  data() {
    return :{
      name:'奇怪的栗子'
    }
  }
}
</script>
````
  - src/APP.vue
````
<template>
  <div id="app">
    <img alt="vue logo" src="./assets/logo.png">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/kkb">奇怪的栗子</router-link>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
````

# csr 和 ssr 统一入口
  - src/createapp.js
````
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp (context) {
  const router = createRouter();
  const app = new Vue({
    router,
    context,
    render: h => h(App)
  })
  return { app, router }
}
````

# csr的入口文件main.js
  - src/main.js
````
import { createApp } from './createApp'

const { app, router } = createApp();
router.onReady(() => {
  app.$mount('#app')
})
````

# ssr的入口文件entry-server.js
  - src/entry-server.js
````
import { createApp } from './src/createApp'

export default context => {
  return new Promise ((resolve, reject) =>{
    const {app, router} = createApp(context);
    router.push(context.url);
    router.onReady(()=>{
      resolve(app)
    }, reject)
  })
}
````

# 后端加入webpack
````
npm install cross-env vue-server-renderer webpack-node-externals lodash.merge --save
````
  - 具体配置
  - vue.config.js
````
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');
const merge = require('lodash.merge');
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const target = TARGET_NODE ? 'server' : 'clent';

module.export = {
  css: {
    extract: false
  },
  configureWebpack: () => ({
    // 将entry指向应用程序的 server/client 文件
    entry: TARGET_NODE ? ./src/entry-${target}.js : './src/main.js',
    // 对bundle renderer 提供source map 支持
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    externals: TARGET_NODE
      ? nodeExternals({
        whilelist:[/\.css$]
        })
      : undefined,
    optimization: {
      splitChunks: undefined
    },
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>{
        merge(options, {
          optimizeSSR: false
        });
      });
  }
};
````

# 服务器启动文件
  - server.js
````
const fs = require('fs');
const express = require('expres');
const app = express();

// 开放dist目录
app.use(express.static('./dist'))

// 第 2 步: 获得一个createBundedlRenderer
const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const clientMainfest = require('./dist/vue-ssr-client-mainfest.json');

const renderer = createBundleRenderer(bundle, {
  runInVewContext: false,
  template: fs.readFileSync('./src/index.temp.html','utf-8'),
  clientMainfest: clientMainfest
});

function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      resolve(html);
    });
  });
}

app.get('*', async (req,res) =>{
  console.log(req.url, 123)
  const context = {
    title:'ssr test',
    url: req.url
  }
  const html = await renderToString(context);
  res.send(html)
})

const port = 3001;
app.listen(port, function(){
  console.log(`server started at localhost:${port}`)
})
````

