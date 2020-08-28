//但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

//在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
//Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
//每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。
//一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

//---------创建buffer类
//1.创建长度为10字节的buffer实例
var buf1 =new Buffer(10);
console.log(buf1)

//2.通过给定的数组创建Buffer实例
var buf2 = new Buffer([10,20,30,40,50]);
console.log(buf2)

//方法3  通过一个字符串来创建buffer实例
var buf3= new Buffer("www.w3school.cn","utf-8")
console.log(buf3)

//------写入缓冲区
//--语法---buf.write(string[, offset[, length]][, encoding])
// 参数描述如下
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。

// 返回值
// 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

//--实例
 var buf = new Buffer(256);
 len = buf.write('www.w3school.cn')
 console.log("写入字节数",len);

 //-----从缓冲区读数据
 //--语法--buf.toString([encoding[,start[,end]])
//  参数
// 参数描述如下：
// 
// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。

// 返回值:解码缓冲区数据并使用指定的编码返回字符串

//--实例
var buf4 = new Buffer(26);
for(var i= 0;i<26;i++) {
  buf4[i] = i+ 97;
}

console.log(buf4.toString('ascii'));  // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf4.toString('ascii',0,5)) // 输出: abcde
console.log(buf4.toString('utf8',0,5)) // 输出: abcde
console.log(buf4.toString(undefined,0,5)) // 使用 'utf8' 编码, 并输出: abcde

//-----将buffer转为json对象
//--语法--buf.toJSON()
//--返回值: 返回JSON对象
//--实例
var buf5 = new Buffer('www.w3school.cn');
var json = buf5.toJSON(buf5);
console.log(json);

//-----缓冲区合并
//--语法.Buffer.concat(list[, totalLength])
// 参数
// 参数描述如下：
// 
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
// --返回值
// --返回一个多个成员合并的新 Buffer 对象。

var buf6 = new Buffer('W3Cschool教程');
var buf7 = new Buffer('www.w3school.cn');
var buf8 = Buffer.concat([buf6,buf7]);
console.log('buf8内容',buf8);
console.log('buf8内容',buf8.toString());

//-----缓冲区比较
//--语法:缓冲区比较
// 参数
// 参数描述如下：
// 
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
// 返回值
// 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

//--实例
var buf9 = new Buffer('ABC');
var buf10 = new Buffer('ABCD');
var result = buf9.compare(buf10);

if(result < 0) {
   console.log(buf9 + " 在 " + buf10 + "之前");
}else if(result == 0){
   console.log(buf9 + " 与 " + buf10 + "相同");
}else {
   console.log(buf9 + " 在 " + buf10 + "之后");
}

//-----拷贝缓冲区
//--语法:buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
// 参数
// 参数描述如下：
// 
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length

//--返回值--没有返回值
//--实例
var buf12 = new Buffer('ABC');
// 拷贝一个缓冲区
var buf13 = new Buffer(3);
buf12.copy(buf13);
console.log("buf13 content: " + buf13.toString()); // buf13 content: ABC

//-----缓冲区裁剪
//--语法:buf.slice([start[, end]])
//--参数
// 参数描述如下：
// 
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length
// 返回值
// 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
//---实例

var buf14 = new Buffer('youj');
//剪切缓冲区
var buf15 = buf14.slice(0,2);
console.log('buf15 content:' + buf15.toString());

//-----缓冲区长度
//--语法:buf.length
// 返回值
// 返回buf所占据的内存长度

//--实例
var buf16 = new Buffer('www.w3cschool.cn');
// 缓冲区长度
console.log("buffer length:" + buf16.length)
