const http = require('http');
const fs = require('fs');
const mime = require('mime');
const url = require('url');//对URL进行处理，把字符串转换为对象

//每当有请求来临的时候调用ser函数对客户端进行响应
const server = http.createServer(ser);
function ser(request, response) {
    //true 表示query转化为对象
    let urlObj = url.parse(request.url,true);
    let query  = urlObj.query;
    let pathname = urlObj.pathname;
    console.log(urlObj);
    if (pathname == '/') {
        response.statusCode = 200;//设置响应状态码
        response.setHeader('Content-Type', 'text/html;charest=UTF-8'); //设置响应头信息
        //读取文件的内容，并将读取到的内容重写到响应体
        fs.readFile('index.html', (err, data) => {
            response.write(data);//设置响应主体
            response.end();
        });
    } else if(pathname == '/time'){
        let couent = 0;
        let int = setInterval(()=>{
            response.write(new Date().toString());
            couent++;
            if(couent==5){
                response.end();
                clearInterval(int);
            }
        },1000);

    }else {
        static(pathname, response);
    }
};

function static(pathname, response) {
    if (pathname == '/favicon.ico') {
        return
    }
    response.setHeader('Content-Type', mime.getType(url) + ';charest=UTF-8'); //设置响应头信息
    //读取文件的内容，并将读取到的内容重写到响应体
    fs.readFile(pathname.slice(1), (err, data) => {
        response.write(data);//设置响应主体
        response.end();
    });

}

server.listen('8080', 'localhost');

console.log('运行成功')