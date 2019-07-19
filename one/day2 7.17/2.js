//模块  抛出(暴漏)
//node_modules  项目依赖  npm 包管理工具
//module.exports  exports
//export default(暴漏) 与module.exports的区别
// 内置模块 外置模块
var foo=require('./node_modules/foo.js')
console.log(foo)

