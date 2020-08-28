/*
 * @Author: your name
 * @Date: 2020-08-26 18:36:24
 * @LastEditTime: 2020-08-27 10:22:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editvar
 * @FilePath: /learn-node/eventEmitter.js
 */
//event.js

// var EventEmitter = require('events').EventEmitter;

// var event = new EventEmitter();

// event.on('some_event',function(){
//   console.log('some_event occured');
// })
// setTimeout(function(){
//   event.emit('some_event');
// })

//events 模块只提供了一个对象： events.EventEmitter。------------EventEmitter 的核心就 是事件发射与事件监听器功能的封装。
var events = require('events');
const { EventEmitter } = require('events');
// const { Server } = require('http');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('someEvent',function(arg1,arg2){
  console.log('listener1',arg1,arg2);
})
eventEmitter.on('someEvent',function(arg1,arg2){
  console.log('listener2',arg1,arg2);
})
eventEmitter.emit('someEvent','byvoid',1992)
// 以上例子中 emitter 为事件 someEvent 注册了两个事件监听器，然后发射了 someEvent 事件。
// 运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。 

// EventEmitter的常用API
// EventEmitter.on(event,listener)---emitter.addListener(event,listener) 为指定事件注册一个监听器,接收一个字符串event和一个回调函数listener
server.on('connection', function (stream) {
  console.log('someone connected!');
});
// EventEmitter.emit(event, arg1, arg2, ...) 发射 event 事件，传递若干可选参数到事件监听器的参数表。 

//EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 
server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});

// EventEmitter.removeListener(event, listener) 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器。
var callback = function(stream) {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);


// EventEmitter.removeAllListeners(event) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。 

//---error事件----
// EventEmitter定义了一个特殊的时间error,它包含了'错误'的语义,我们在遇到异常的时候会发射error事件
//当 error被发射时,EventEmitter规定如果没有响应的监听器,Node.js会把它当作异常,退出程序并打印调用栈

var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 