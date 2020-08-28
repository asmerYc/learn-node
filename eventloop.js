/*
 * @Author: your name
 * @Date: 2020-08-25 14:15:27
 * @LastEditTime: 2020-08-25 14:22:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editts =require
 * @FilePath: /learn-node/eventloop.js
 */
 //引入events模块
var events = require('events');
//创建eventEmitter
var eventEmitter = new events.EventEmitter();

//绑定事件以及事件的处理程序

eventEmitter.on('eventName',eventHandler);
//触发事件
eventEmitter.emit('eventName');