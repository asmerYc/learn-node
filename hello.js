/*
 * @Author: your name
 * @Date: 2020-08-27 18:31:44
 * @LastEditTime: 2020-08-27 18:38:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/hello.js
 */
// exports.world = function() {
//   console.log('Hello world');
// }

function Hello() {
  var name;
  this.setName = function(thyName){
    name = thyName;
  };
  this.sayHello = function(){
    console.log('Hello' + name);
  };

};
module.exports = Hello;