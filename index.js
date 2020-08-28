/*
 * @Author: your name
 * @Date: 2020-08-28 17:05:19
 * @LastEditTime: 2020-08-28 17:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/index.js
 */
 var server = require("./server");
 var router = require("./router");
 
 server.start(router.route);