let http = require('http');
let fs = require('fs');
let port = 3498;

let server = http.createServer((req,res)=>{
    fs.readFile('mycode.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)