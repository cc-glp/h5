var express=require("express")
var app=express()
app.get("/new",(req,res)=>{
    console.log(req.query)
    res.end('success')
})
app.listen(3000)
