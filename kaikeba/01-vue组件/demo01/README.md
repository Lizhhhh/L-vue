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


