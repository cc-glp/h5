var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
//    fs.writeFile('./static/1.txt',"ssssss",{flag:"a"},{err})
//    if(err){
//        throw err
//    }
    //   fs.copyFile('./static/1.txt','./static/2.txt',(err)=>{
    //       res.end("success")
    //   })

      //读取目录
    //   fs.readdir("./static/",(err,data)=>{
    //       console.log(data)
    //       res.end()
    //   })


    //创建目录
    // fs.mkdir("./cc",(err)=>{
    //     res.end("success")
    // })

    //查看目录信息  stat
    // fs.stat("./static",(err,stat)=>{
    //     // console.log(stat)
    //     console.log(stat.isFile())
    //     console.log(stat.isDirectory())
    //     res.end()
    // })

    //流 stream  文件流  createReadStream 创建一个读取文件流
    var stream=fs.createReadStream('./static/3.txt')
    var content=''
    stream.on('data',(chunk)=>{
        console.log(chunk)
        content+=chunk
        // console.log(content)
    })
    stream.on("end",(chunk)=>{
        console.log("数据接收完毕"+content)
    })
 res.end()

}).listen(3000)