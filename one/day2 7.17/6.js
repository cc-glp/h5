var http=require('http')
var fs=require('fs')
var fd=require('formidable')
var sd=require('silly-datetime')
var path=require('path')
var fs=require('fs')
http.createServer((req,res)=>{
   if(req.url=="/favicon.ico"){
     return
   }
   if(req.url=="/dopost"){
    var form = new fd.IncomingForm();
    form.parse(req,function(err,fields,files){
         form.uploadDir ="/upload"
         var oldpath=files.pic.path
         var extname=path.extname(files.pic.name)
         var tt=sd.format(new Data(),"YYYYMMDDhhmmss")
         var newpath="upload"+ tt + extname
         console.log(newpath)
         fs.rename(oldpath,newpath,(err)=>{
           res.end('success')
         })

    })
   }
}).listen(3000)

var sd=require("silly-datetime")
console.log(sd)