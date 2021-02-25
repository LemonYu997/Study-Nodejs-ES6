//引入node.js内置http模块
var http = require("http");

//创建并监听web服务器，端口8888
http.createServer(function (request, response) {
    //发送http头部
    //参数1：响应状态码，200表示成功
    //参数2：响应头部信息，Content-Type内容类型：纯文本
    response.writeHead(200, {"Content-Type": "text/plain"});

    for (var i = 0; i < 10; i++) {
        response.write("Hello World \n");
    }

    //发送响应数据
    response.end("Hello World \n");
}).listen(8888);

console.log("服务器运行在 http://127.0.0.1:8888");