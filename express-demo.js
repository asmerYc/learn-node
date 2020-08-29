/*
 * @Author: your name
 * @Date: 2020-08-29 14:32:22
 * @LastEditTime: 2020-08-29 14:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/express-demo.js
 */
// 我们已经了解了HTTP请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。
// 
// 在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。
// 
//  接下来我们扩展Hello World，添加一些功能来处理更多类型的HTTP请求。

var express = require('express')
var app = express()

//在主页输出 "hello world"
app.get('/',function(req,res){
  console.log('主页GET请求');
  res.send('Hello GET')
})

//POSt请求
app.post('/',function(req,res) {
  console.log('主页POST请求');
  res.send('Hello POST');
})
// del_user页面响应

app.delete('/del_user',function(req,res){
  console.log('/del_user响应DELETE请求');
  res.send('删除页面');
})

// /list_user页面GET请求
app.get('/list_user',function(req,res){
  console.log('/list_user GET请求');
  res.send('用户列表页面');
})

//对页面abcd,abxcd,ab123cd 等响应get请求

app.get('/ab*cd',function(req,res){
  console.log('/ab*cdGET请求');
  res.send('正则匹配')
})

var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;
})