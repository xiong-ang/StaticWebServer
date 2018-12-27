const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const getMime = require('./mime').getMime;

http.createServer((req, res)=> {
    
    let pathname = url.parse(req.url).pathname;
    if(!pathname || pathname === '/'){
        pathname = '/index.html';
    }

    console.log(pathname);
    if(pathname != '/favicon.ico'){

        fs.readFile('static'+ pathname, (err, data)=>{
            if(err){
                res.writeHead(404);
            }else {
                let extname = path.extname(pathname);
                let mime = getMime(extname);
                res.writeHead(200, {"Content-Type":mime+";charset='utf-8'"});
                res.write(data);     
            }

            res.end();
        });
    }else{
        res.end();
    }
}).listen(8585);

console.log('Server is running at http://localhost:8585');