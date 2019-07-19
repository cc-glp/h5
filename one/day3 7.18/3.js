var http=require("http")
var art=require('art-template')
var fs=require('fs')
http.createServer((req,res)=>{
   var newData={
       list:["5","6","7"]
   }
   fs.readFile("./b.art",(err,data)=>{
     var str=data.toString()
     var result=art.render(str,newData)   
    res.end(result)
   })
}).listen(3000)