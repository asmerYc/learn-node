/*
 * @Author: your name
 * @Date: 2020-08-27 18:20:02
 * @LastEditTime: 2020-08-27 18:26:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/compress.js
 */
var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));
console.log('文件压缩完成')