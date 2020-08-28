/*
 * @Author: your name
 * @Date: 2020-08-28 15:17:32
 * @LastEditTime: 2020-08-28 15:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: /learn-node/aboutFunction.js
 */
// function say(word) {
//   console.log(word);
// }

// function execute(someFunction,value){
//   someFunction(value)
// }
// execute(say,'Hello');

// //匿名函数

// function execute1(anyFunction,value){
//   anyFunction(value);
// }

// execute1(function(word){
//   console.log(word)
// },'你好')

//--函数是如何让HTTP服务器工作的

var http = require('http');
http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write('Hello World');
  response.end();
}).listen(8888)