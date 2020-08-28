/*
 * @Author: your name
 * @Date: 2020-08-27 17:54:13
 * @LastEditTime: 2020-08-27 18:09:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/writeStream.js
 */
var fs = require('fs');
var data = "W#Cschool教程官网地址:www.w3cschool.cn";

//创建一个可以写入的流,写入到文件output.txt中
var writerStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writerStream.write(data,'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件
writerStream.on('finish',function(){
  console.log('写入完成');
})
writerStream.on('error',function(err){
  console,log(err.stack)
})

console.log("程序执行完毕");

