/*
 * @Author: your name
 * @Date: 2020-08-27 18:27:49
 * @LastEditTime: 2020-08-27 18:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-node/decompress.js
 */
var fs = require('fs')
var zlib = require('zlib');


//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('unzip.txt'));

console.log('解压完成');