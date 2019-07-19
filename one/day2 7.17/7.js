var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    var datas = {
        "list": [
            {
                name: "bob",
                age: 20
            }, {
                name: "tony",
                age: 21
            }
        ]
    }
  

     fs.readFile("../day2 7.17/b.ejs",(err,data)=>{
       var template=data.toString()
       var result=ejs.render(template,datas)
       res.end(result)
     })

}).listen(3000)

