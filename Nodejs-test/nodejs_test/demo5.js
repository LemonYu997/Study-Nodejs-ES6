//引入node.js内置http模块
var http = require("http");
var url = require("url");

//创建并监听web服务器，端口8888
http.createServer(function (request, response) {
    //发送http头部
    //参数1：响应状态码，200表示成功
    //参数2：响应头部信息，Content-Type内容类型：纯文本
    response.writeHead(200, {"Content-Type": "text/plain"});

    //解析请求地址
    //参数1：请求地址
    //参数2：如果为true，使用query解析参数，默认是false
    var params = url.parse(request.url, true).query;
    for (var key in params) {
        response.write(key + " = " + params[key]);
        response.write("\n");
    }

    //发送响应数据
    response.end("");
}).listen(8888);

console.log("服务器运行在 http://127.0.0.1:8888");