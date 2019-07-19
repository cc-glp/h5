var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
   
    if(req.url=="/red"){
        fs.readFile("../第一天 7.16/red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("../第一天 7.16/green.html",(err,data)=>{
            res.end(data)
        })  
    }

}).listen(3000)

