# 项目描述

## - 。-

### 程序员好难啊..

#### 编不下去了,哈哈哈

## 用(命令行)把修改后的代码提交到码云上去!
1. git add .
2. git commit -m '提交信息'
3. git push

## 制作首页App组件
1. 完成 Header 区域, 使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabber 区域, 使用的是 MUI 的 Tabbar.html
   + 在制作 购物车 小图标的时候,操作会相对多一些
   + 先把 扩展图标的 css 样式, 拷贝到 项目中
   + 拷贝 扩展字体库 ttf 文件,到项目中
   + 为 购物车 小图标, 添加 如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件


## 改造 tabbar 为router-link

## 设置路由的高亮

## 点击 tabbar 中的路由连接, 展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取:使用 vue-resource
2. 使用 this.$http.get 获取数据
3. 获取到的数据,保存到data身上
4. 使用v-for 循环渲染 每个item 项

## 改造 九宫格 区域的样式


## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制界面, 使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据


## 实现新闻资讯列表点击： 跳转到新闻详情
1. 将列表中的每一项改造成 router-link, 同时在列表跳转时,提供一个id
2. 创建新闻详情的组件页面, NewsInfo.vue
3. 在路由模块中, 将新闻详情的路由地址 和 组件页面 地址对应起来

## 实现 新闻详情 的页面布局 和 数据渲染

## 单独封装一个 comment.vue 作为评论子组件.
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的 页面中, 先手动导入 comment 组件
  + `import comment from './comment.vue'`
3. 在父组件中,使用 `components` 属性,将刚才导入 comment 组件,注册为自己的 子组件
4. 将注册子组件时候的 注册名称 以标签的形式, 在页面中引用即可.


## 获取所有评论的数据, 展示到评论组件中

## 实现点击 加载更多
1. 为加载更多按钮,绑定点击事件,在事件中,请求下一页数据
2. 点击加载更多, 让 pageIndex++, 然后重新调用 this.getComments 方法,重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况,我们在点击加载更多的时候,每当获取到新数据,应该让 老数据调用数组的 concat方法,拼接上新数据.


## 发表评论
1. 把文本框做双向绑定
2. 为发表评论按钮绑定一个事件
3. 校验评论内容是否为空,若为空弹出
4. 通过 vue-resource 发送一个请求,把评论提交给 服务器
5. 当发表评论后,重新刷新列表,已查看最新的评论