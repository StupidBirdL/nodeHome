const http = require('http');
//每当有请求来临的时候调用ser函数对客户端进行响应
const server = http.createServer(ser);
//
function ser(request,response) {
    console.log(request.method);//获取请求中的方法
    console.log(request.url);//获取请求中的url地址
    console.log(request.headers);//获取请求头部
    console.log(request);
    response.statusCode = 404;//设置响应状态码
    response.setHeader('Content-Type','text/html;charest=UTF-8'); //设置响应头信息
    response.setHeader('name','lyj'); //设置响应头信息
    response.write(new Date().toString());//设置响应主体
    response.end();
}
server.listen('8080','localhost');

console.log('运行成功')