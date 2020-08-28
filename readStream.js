/*
 * @Author: your name
 * @Date: 2020-08-27 16:56:19
 * @LastEditTime: 2020-08-27 17:34:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/stream.js
 */
var fs = require('fs');
var data = "";
//创建可读流
var readStream = fs.createReadStream('input.txt');

//设置编码为utf8
readStream.setEncoding('UTF8');
//处理流事件-->data,end,and error
readStream.on('data',function(chunk){
  data+=chunk;
})

readStream.on('end',function(){
  console.timeLog(data);
})
readStream.on('error',function(){
  console.log(err.stack);
})
console.log('程序执行完毕')