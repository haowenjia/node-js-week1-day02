const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, res) => {
    //    获取请求地址
    let pathname = req.url;
    // 对‘/‘进行处理
    pathname = pathname === '/' ? "/index.html" : pathname;
    // 不考虑图标文件
    let filename = path.join(__dirname, 'publick', pathname);
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('server internal error.')
        } else {
            res.end(data);
        }
    })

})
server.listen('8080', () => {
    console.log("server is running at http://127.0.0.1:8080");
})