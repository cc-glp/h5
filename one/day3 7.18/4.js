var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
    var list=["a","k","f"]
    fs.readFile("./c.art",(err,data)=>{
        var str=data.toString()
        var result=art.render(str,{list:list})
        res.end(result)
    })

}).listen(3000)