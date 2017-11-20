var http= require ('http');
var fs = require('fs');
var url = require('url');
var address = 'https://www.youtube.com/watch?v=p5eCYKiZN-4&t=46s';
var split = url.parse(address, true);
http.createServer(function (request, response) {
    fs.readFile('index.html', function(err, data) {
      response.writeHead(200);
      response.write(data);
      response.end();
    });
  })
  .listen(8080);
  console.log("goodstuff")
  //appends content to a specified file and if it does not exist it is created.
  fs.appendFile('index.html', 'wonderful and exciting', function (err) {
    if (err) throw err;
    console.log('Successfully done');
  });
  //opens a file. if it does not exist it is created. takes flag aas 2nd argument.
  fs.open('servers.html',"w", function (err, file) {
    if (err) throw err;
    console.log('Woo i have a new file');
  });
  //appends some content to the file
  fs.appendFile('servers.html', ' i wish you were interesting', function (err) {
    if (err) throw err;
    console.log('i have updated my file');
  });
  fs.rename('servers.html', 'client.html',function(err,file){
      if (err) throw err;
      console.log("renamed my file from ServiceWorkerMessageEvent.html to client.html");
  })
  
  
  console.log(split.host); //www.youtube.com
  console.log(split.pathname); // /watch
  console.log(split.search); //  ?v=p5eCYKiZN-4&t=46s
  
  