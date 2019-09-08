// webpack 是基于node构建的,webpack的配置文件中,任何合法的Node代码都是支持的
var path = require('path')

// 在内存中生成src下的index.html,同时自动将打包好的bundle.js 导入到页面中
var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令行形式运行webpack 或 webpack-dev-server 的时候,工具会发现,我们并没有提供 要打包的文件的入口和出口文件,此时,他会在webapck.config.js 中寻找 入口和出口文件
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, './dist'), // 指定输出文件的名称
    filename: 'bundle.js' // 指定输出文件的名称
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]'
      }, // 处理图片路径的url
      // 图片的大小 >= limit 不会被转为base64 , 否则 转为base64格式
      {
        // 处理字体文件的配置
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]'
      },
      {
        // 配置 babel 来转换 es语法
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 所有webpack 插件的配置
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      // "vue$":'vue/dist/vue.js'
    }
  }
}
