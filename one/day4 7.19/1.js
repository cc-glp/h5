var express=require("express")
var bodyParser=require("body-parser")
var path=require("path")
var publicpath=path.resolve(__dirname,"static")
var app=express()

//post json  字符串
//处理 json 数据的请求
app.use(bodyParser.json())

//处理字符串数据的请求
app.use(bodyParser.urlencoded({extends:false}))

app.use(express.static(publicpath))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    var body=req.body
    console.log(body)
    res.send("post 请求成功")
})
app.listen(3000)