var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    var admin = {
        username: "admin",
        password: "123456"
    }
    var query = url.parse(req.url, true).query
    console.log(query.username)
    console.log(query.password)
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (query.username == admin.username && query.password == admin.password) {
        res.end('登陆成功')
    } else {
        res.end('登陆失败')
    }
}).listen(3000)