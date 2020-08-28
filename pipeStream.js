/*
 * @Author: your name
 * @Date: 2020-08-27 18:10:47
 * @LastEditTime: 2020-08-27 18:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/pipeStream.js
 */
// 管道提供了一个输出流到输入流的机制,通常我们用于从一个流中获取数据并将数据传递到另一个流中

//下边实例我们通过一个文件内容并将内容写入到另一个文件中

var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writerStream =fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容,并将内容写入到output.txt文件中
readerStream.pipe(writerStream)
console.log('程序执行完毕');