/*
 * @Author: your name
 * @Date: 2020-08-28 17:17:56
 * @LastEditTime: 2020-08-29 10:25:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/global.js
 */

 //process是一个全局变量,即global对象的属性
 // 它用于描述当前Node.js进程状态的对象,提供了一个与操作系统的简单接口
 // process.argv是命令行参数数组,第一个元素是node,第二个元素是脚本文件名,产品呢给第三个元素开始每一个元素是一个原型参数
console.log(process.argv)

// [
//   '/home/asmer/.nvm/versions/node/v12.18.0/bin/node',
//   '/home/asmer/Documents/My-web/learn-node/global.js'
// ]

//--process.stdout是标准输出流,通常我们使用console.log()向标准输出打印字符,而process.stdout.write()函数提供了更底层的接口
//--process.stdin是标准输入流,初始时它是被暂停的,要向从标准输入读取数据,你必须恢复流,并手动编写流的事件响应函数

process.stdin.resume()
process.stdin.on('data',function(data){
  process.stdout.write('read from comsole:' + data.toString())
})

//--process.nextTick(callBack)的功能是为事件循环设置一项任务,node.js会在下次事件循环调响应时调用callBack\

// node.js适合I/O密集型的应用,而不是计算密集型的应用,因为一个node.js进程只有一个线程,因为在任何时刻都只有一个事件执行

//如果这个事件占用大量的cpu的时间,执行事件循环中的下一个事件就需要等待很久,因此node.js的一个编程原则就是尽量缩短每个事件的执行时间,
// process.nextTick()提供了一个这样的工具,可以把复杂的工作拆散,变成一个个较小的事件

// functiondoSomething(args, callback) { 
//   somethingComplicated(args); 
//   callback(); 
// } 
// doSomething(functiononEnd() { 
//   compute(); 
// }); 