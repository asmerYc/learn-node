/*
 * @Author: your name
 * @Date: 2020-08-27 18:31:37
 * @LastEditTime: 2020-08-27 20:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/module.js
 */

var Hello = require('./hello');
// hello.world()
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();