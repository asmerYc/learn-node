/*
 * @Author: your name
 * @Date: 2020-08-29 14:10:32
 * @LastEditTime: 2020-08-29 14:17:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edithttp
 * @FilePath: /learn-node/client.js
 */
 var http = require('http');

 // 用于请求的选项
 var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'  
 };
 
 // 处理响应的回调函数
 var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
       body += data;
    });
    
    response.on('end', function() {
       // 数据接收完成
       console.log(body);
    });
 }
 // 向服务端发送请求
 var req = http.request(options, callback);
 req.end();