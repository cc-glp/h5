//变量抛出
var obj={
    name:"tony",
    age:20
}
exports.obj=obj
//  var a=1
//函数(对象)抛出
function show(){
    console.log(1)
} 

// exports.a=1
// module.exports={
//     b:2
// }
// exports.show=show
// module.exports={
//     show:show
// }
//exports是module.exports的引用
console.log(module)