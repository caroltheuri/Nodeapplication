var http =require('http');
http.createServer(function(request,response){
    response.writeHead(200);
    response.write("Yeey my first JS");
    response.end();
}).listen(8080);
console.log("listening at port 8080")