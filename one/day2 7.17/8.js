//queryString  查询字符串
var queryString=require("querystring")
console.log(queryString)
//eval  xss攻击  sql注入
//http://127.0.0.1:3000?name=tony&age=15
//queryString.stringify 将对象转化为字符串
// var url=queryString.stringify({name:"tony",age:15})
 var url=queryString.parse("name=tony&age=15")

console.log(url)