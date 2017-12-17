const http = require('http');
const fs = require('fs');
const mime = require('mime');
//每当有请求来临的时候调用ser函数对客户端进行响应
const server = http.createServer(ser);
function ser(request, response) {
    let url = request.url;
    if (url == '/') {
        response.statusCode = 200;//设置响应状态码
        response.setHeader('Content-Type', 'text/html;charest=UTF-8'); //设置响应头信息
        response.setHeader('name', 'lyj'); //设置响应头信息
        //读取文件的内容，并将读取到的内容重写到响应体
        fs.readFile('index.html', (err, data) => {
            response.write(data);//设置响应主体
            response.end();
        });
    } else {
        static(url, response);
    }
};

function static(url, response) {
    if (url == '/favicon.ico') {
        return
    }
    response.setHeader('Content-Type', mime.getType(url) + ';charest=UTF-8'); //设置响应头信息
    //读取文件的内容，并将读取到的内容重写到响应体
    fs.readFile(url.slice(1), (err, data) => {
        response.write(data);//设置响应主体
        response.end();
    });

}

server.listen('8080', 'localhost');

console.log('运行成功')