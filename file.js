/*
 * @Author: your name
 * @Date: 2020-08-29 10:26:51
 * @LastEditTime: 2020-08-29 11:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/file.js
 */
//node.js的文件系统被封装在fs模块中,它提供了文件的读取,写入,更名,删除,遍历目录,链接等posix文件系统操作

// fs模块中所有的操作都提供了异步的和同步的两个版本，例如读取文件内容的函数有异步的fs.readFile()和同步的fs.readFileSync()。我们以几个函数为代表，介绍fs常用的功能，并列出fs所有函数的定义和功能。
//--fs.readFile
//--语法fs.readFile(filename,[encoding],[callback(err,data)])

// filename（必选），表示要读取的文件名。 
// encoding（可选），表示文件的字符编码。 
// callback 是回调函数，用于接收文件的内容。

//如果不指定encoding，则callback就是第二个参数。回调函数提供两个参数err和data，err表示有没有错误发生，data是文件内容。
//如果指定了encoding，data是一个解析后的字符串，否则data将会是以Buffer形式表示的二进制数据。

// var fs = require('fs');
// fs.readFile('content.txt',function(err,data){  //异步加载
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }

// })

//假设content.txt中的内容是UTF-8编码的Text文本文件示例，运行结果如下：

// var fs = require('fs');
// fs.readFile('content.txt','utf-8',function(err,data){
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

//--fs.readFileSync(filename,encoding)是fs.readFile同步的版本,他接受和fs.readFile相同的参数,而读取到的文件内容会以函数返回值的形式返回
//-- 如果错误发生,fs会抛出异常,你需要使用try和catch捕获并处理异常

//--注意:与同步I/O函数不同,Node.js中异步函数大多没有返回值

//--fs.open(path, flags, mode, callback(err, fd))是POSIX open函数的封装，类似于C语言标准库中的fopen函数。它接受两个必选参数，path为文件的路径， flags 可以是以下值：
// r ：以读取模式打开文件。
// r+ ：以读写模式打开文件。
// w ：以写入模式打开文件，如果文件不存在则创建。
// w+ ：以读写模式打开文件，如果文件不存在则创建。
// a ：以追加模式打开文件，如果文件不存在则创建。
// a+ ：以读取追加模式打开文件，如果文件不存在则创建

//--fs-read
//--语法:fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])

//参数说明：

//fd: 读取数据并写入buffer指向的缓冲区对象。
//offset: 是buffer的写入偏移量。
//length: 是要从文件中读取的字节数。
//position: 是文件读取的起始位置，如果position的值为null，则会从当前文件指针的位置读取。
//callback:回调函数传递bytesRead和buffer，分别表示读取的字节数和缓冲区对象。

var fs = require('fs')
fs.open('content.txt','r',function(err,fd){
  if(err) {
    console.log(err);
    return;
  }
  var buf =new Buffer(8);
  fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
    if(err) {
      console.error(err);
      return;
    }
    console.log('bytesRead:' + bytesRead);
    console.log(buffer)
  })
})