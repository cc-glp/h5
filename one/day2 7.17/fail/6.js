/*
npm 包管理工具
npm init 项目初始化   =  npm init -y  =》package.json
npm install 下载  =npm i
--save =-S  生产环境        --save-dev = -D开发环境
npm uninstall  卸载
*
生产环境：
   线上运行的环境
开发环境：
   开发过程当中


*
*
*

*/
var sd=require('silly-datetime')
console.log(sd)
// 时间戳格式化
var time=sd.format(new DataCue():"YYYY-MM-DD-hh-mm-ss")