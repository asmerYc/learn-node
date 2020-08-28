/*
 * @Author: your name
 * @Date: 2020-08-24 09:15:48
 * @LastEditTime: 2020-08-26 09:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: /learn-node/main.js
 */

 // 阻塞代码实例
 
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

//非阻塞代码实例

// var fs = require("fs");
// fs.readFile('input.txt',function(err,data){
//   if(err) return console.log(err);
//   console.log(data.toString());
// })
// console.log('程序执行结束');

//阻塞和非阻塞的不同:第一个实例在文件读取完后才执行完程序,第二个实例是不需要等待文件读取完,同时执行接下来的代码,大大提高了程序的性能

//因此,阻塞按是按照顺序执行的,而非阻塞是不按照顺序执行的,所以如果需要处理回调函数的参数,我们就需要写在回调函数内


//实例

//引入events模块
var events = require('events');

//创建eventEmitter
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
  console.log('连接成功')
  //触发data_received
  eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_recevied事件
eventEmitter.on('data_received',function(){
  console.log('数据接受成功');
})

//触发connection事件\
eventEmitter.emit('connection');

console.log('程序执行完毕')