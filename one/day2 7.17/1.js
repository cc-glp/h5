var http=require('http')
var path=require('path')
http.createServer((req,res)=>{
    // var oldpath=path.resolve("../day2 7.17/aaa/8888")
    //path.resolve 会将最后一个参数转化为绝对路径
    // var oldpath=path.normalize("/aa/ss/dd///gggg")
    //path.normalize 路径的格式化
   
    //  var oldpath=path.extname('index.html')
    //path.extname 获取文件的扩展名
    
    // path.format 将对象转化成路径
    // var oldpath=path.format({
    //     root:'',
    //     dir:"c/a/a",
    //     base:"/d"
    // })
    console.log(oldpath)
    
    res.end()
}).listen(3000)
//path.isAbsolute()返回绝对路径
//path.join() 将多段路径进行拼接
//path.relative() 返回相对路径
//path.dirname()  返回文件目录
//path.parse()    解析文件路径
