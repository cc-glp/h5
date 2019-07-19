var express=require('express')
var app=express()
app.get("/",(req,res)=>{
    res.send("首页")
}).get("/about/:text",(req,res)=>{
    res.send("你接收的数据为："+req.params.text)
})
// app.get("/about/:id",(req,res)=>{
//     res.send("路由接收的数据为："+req.params.id)
// })
app.listen(3000)