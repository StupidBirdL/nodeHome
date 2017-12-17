process.on('uncaughtException',(e)=>{
    console.log('uncaughtException',e.message)
})
/*
* global == winodw 全局对象
* module        当前模块对象
* exports       导出对象
* require       加载模块的方法
* __dirname     当前模块所在目录的绝对路径
* __filename    当前模块的绝对路径
* */
//function x(module,exports,require,__dirname,__filename) {
    let name = 'lyj'
    exports.name = name;
    console.log(this);
    // console.trace()//显示当前调用堆栈
//}
// console.log(global);
/*
setImmediate   clearImmediate
pid: 7744 进程ID
process  当前进程对象
* */
/*
* 1.    当前模块内部声明的对象
* 2.    外部导入的模块
* 3.    全局对象
* 4.    (从外界传入的参数)类全局变量
* */
// console.log(a)
process.stdout.write('hello');
console.log(process.pid);
process.stdin.on('data',(data)=>{
    console.log(data.toString())
});
process.on('exit',()=>{
    console.log('退出前执行')
});
try{
    console.log(a)
}catch(e){
    console.log(e.message)
}
console.log(b)
