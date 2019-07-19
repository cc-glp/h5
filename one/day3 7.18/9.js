//搭建静态资源服务器
var express=require("express")
var app=express()
var path=require("path")
console.log(__dirname)
var publicpath=path.resolve(__dirname,"public")
app.use(express.static(publicpath))
app.listen(3000)