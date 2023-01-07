let http = require('http');

// req > what we send to server(params,queryparams,body)
// res > what server will respond

let server = http.createServer(function(req,res){
    res.write('<h1>Hii from nodeJs server code</h1>');
    res.end()
})

server.listen(6780)