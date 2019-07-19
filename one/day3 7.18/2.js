 //引入服务器模块
 var http=require("http")
 //ejs ejs模板引擎
 var ejs=require("ejs")
 // fs = file system 文件系统
 var fs=require("fs")
 http.createServer((req,res)=>{
     // req = request  请求   res = response 响应
     var list=["1","2","3"]
     fs.readFile("./a.ejs",(err,data)=>{
        console.log(str)
        var str=data.toString()
        var result=ejs.render(str,{list:list})
        res.end(result)
     })
    
 }).listen(3000)