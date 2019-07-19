var express=require("express")
var fs=require("fs")
var app=express()
app.set("view engine","ejs")

app.set("views",__dirname+"/views")


app.get("/",function(req,res){
    
   res.render("index",{
       list:["8888","88","3"]
   })
})
app.listen(3000)