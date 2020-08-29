/*
 * @Author: your name
 * @Date: 2020-08-29 14:20:04
 * @LastEditTime: 2020-08-29 14:30:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/express.js
 */
// Express是一个简洁而灵活的node.js Web应用框架, 提供了一系列强大特性帮助你创建各种Web应用，和丰富的HTTP工具。

// 使用Express可以快速地搭建一个完整功能的网站。

// Express 框架核心特性包括：

// 可以设置中间件来响应HTTP请求。
// 定义了路由表用于执行不同的HTTP请求动作。 
// 可以通过向模板传递参数来动态渲染HTML页面。

//--安装express
//-- npm isntall express --save

// node_modules目录下会自动创建express目录。以下几个重要的模块是需要与express框架一起安装的：

// body-parser  node.js中间件,用于处理JSON,Raw,Text和URL编码的数据
// cookie-parser 这就是一个解析cookie的工具,通过req.cookies可以取到传过来的额cookie,并把他们转为对象
// multer node.js中间件 用于处理enctype ="muptipart/form-data"的表单数据

var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send("Hello world");
})

var server = app.listen(8081,function(){
  var host = server.address().address
  var host = server.address().port
  // console.log("应用实例,访问地址为http://%s.%s,host,port")
})