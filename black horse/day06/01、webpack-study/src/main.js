// 项目的 JS 入口文件
import './css/index.css'
import './css/index.less'
import './css/index.scss'

// 注意: 如果通过路径的形式,去引入node_modules中相关的文件,可以直接省略路径前面的 node_modules 这一层目录, 直接写包的名称,后面跟上具体的文件目录
import 'bootstrap/dist/css/bootstrap.css'

class Person {
  // 使用 static 关键字,可以创建静态属性..
  static info = { name: 'zs', age: 20 }
}

console.log(Person.info)
// 在 webpack 中,默认只能处理 一部分 ES6 的新语法,需要借助于 loader 去解析 ES6 语法或 ES7 语法. 解析完毕后在托付给webpack 接管.

// 通过Babel 可以将高级语法 转换为 低级的语法
// webpack 提供2套包安装babel
// 1. cnpm i babel-core bable-laoder babel-plugin-transform-runtime -D
// 2. cnpm i babel-preset-env babel-preset-stage-0 -D
// 3. { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }
// 4. .babelrc