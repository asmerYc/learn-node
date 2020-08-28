/*
 * @Author: your name
 * @Date: 2020-08-28 17:25:17
 * @LastEditTime: 2020-08-28 17:25:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/util.js
 */
var util = require('util'); 
function Base() { 
  this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
      console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
  console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 