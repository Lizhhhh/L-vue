const path = require('path')
// 启用热更新
const webpack = require('webpack')

// 导入在内存中生成 HTML 页面的 插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口,表示要使用webpack打包哪个文件
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的路径
    filename: 'bundle.js' // 指定输出文件的名称
  },
  mode: 'development',
  devServer: {
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的端口
    contentBase: 'src', // 指定托管的目录
    hot: true // 启用热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板页面
      filename: 'index.html' // 指定生成页面的名称
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 从右到左调用
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理.less 的处理规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
}

// 注意: webpack 处理第三方文件类型的过程:
// 1. 发现这个 要处理的文件不是JS文件,然后就去 配置文件中,查找有没有对应的第三方 loader 规则
// 2. 如果能够找到对应的规则, 就会调用对应的loader处理 这种文件类型
// 3. 在调用loader 的时候,是从后往前调用的.
// 4. 当最后一个的Loader调用完毕,会把处理结果直接交给webpack进行打包合并,最终输出到bundle.js中去.
