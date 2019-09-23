# 技术栈
1. Vue + Webpack + Element + Axios + vueRouter

# 项目初始化
1. vue init webpack (初始化一个vue + webpack 的环境)
2. npm install  (下载依赖)

# 项目启动
1. npm run dev

# ---------------------- 样式 ------------------------------
# 全局样式设置
```
html, body, #app{
  hight: 100%;
  padding: 0;
  margin: 0;
}
```
# ----------------------------------------------------------


# ---------------------- 排坑 ------------------------------
# eslint-disable-next-line to ignore the next line.  排坑
1. build/webpack.base.conf.js
2. 注释掉: ...(config.dev.useEslint ? [createLintingRule()] : [])
# ----------------------------------------------------------


# 更改路由.
1. 在 src/components 目录下创建一个 Pos.vue 组件
2. src/router/index.js 将导入改为如下:
   + import Pos from '@/components/Pos'
   + component: Pos


# 挑选图标
1. 访问 http://www.iconfont.cn
2. 选择对应的图标
3. 若已登录可以跳过以下:
   + 输入账号登录
4. 点击添加至项目
5. 新建一个项目名为Pos
6. 选择Font class -> 查看在线链接
7. 在index.html导入
   + <link rel="stylesheet" href="http://at.alicdn.com/t/font_1430401_kiwez096bhn.css">
8. 图标的引用 <i class="icon iconfont icon-dianpu"></i>

# 公共组件的创建和导入
1. 在components下创建一个 common 文件夹
2. 在common 文件夹下创建一个 leftNav.vue, 并写好基本的模板
3. 在App.vue(入口文件) 中导入公共组件
   + import leftNav from '@/components/common/leftNav'
4. 注册组件:
   + components:{
     leftNav
   }
5. 引用组件:
   + <leftNav></leftNav>

# 成熟的组件库的使用(Element) 官方网站: https://element.eleme.cn/#/zh-CN/component/installation
1. 安装:cnpm install element-ui --save
2. 引入: src/main.js
   + import Element from 'element-ui'
   + import 'element-ui/lib/theme-chalk/index.css'
   + Vue.use(ElementUI)


# 等待所有虚拟Dom 生成之后, js给dom元素指定高度为 页面高度
1. mounted是数据、方法和DOM全部准备完成
2. document.body.clientHeight 来获取高度
3. 将获取的高度赋值给需要的id: document.getElementById('order-list').style.height = orderHeight + 'px'


# 使用 Axios 从远程读取数据
1. 安装 cnpm install axios --save
2. 导入 & 使用
```
import axios from 'axios'

axios
.get(url)
.then(res=>{
  console.log(res);
})
.catch(err=>{
  console.log(error);
})
```

# 项目打包上线








