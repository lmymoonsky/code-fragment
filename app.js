var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h3>1212<h3>');
    res.end('<p>kan bu chu lai</p>');
}).listen(3000);

console.log('Http server is listening at port 3000');
