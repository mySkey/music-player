var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {

  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader('Access-Control-Allow-Headers', 'Content-type');
  response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

  var pathname=__dirname+url.parse(request.url).pathname;
  // fs.readFile(pathname,'utf-8',function (err,data){
  //     response.write(data)
  //     response.end();
  // });
<<<<<<< HEAD
  var lrc = url.parse(request.url,true).query.music;
  lrc = decodeURI(lrc); //encodeURI 编码 decodeURI 解码
  console.log(lrc)
  var data = fs.readFileSync('./lrc/'+ lrc +'.lrc');
  response.end(data.toString())

  
}).listen(3000,'0.0.0.0');

// 终端打印如下信息
console.log('Server running at http://localhost:3000/');
=======
  var lrc = url.parse(request.url).pathname;
  lrc = decodeURI(lrc); //encodeURI 编码 decodeURI 解码

  var data = fs.readFileSync('./lrc'+ lrc +'.lrc');
  response.end(data.toString())

  
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
>>>>>>> 0428013c6b44bd3063a2f99ec78a5085af0ecd1a
