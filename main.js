var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
   
    
if(pathname === '/' ){
  if(queryData.id === undefined){
    let title = 'Welcome';
    let description = 'Hello, Node.js';
      let template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="index.html">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
          <a href="/create">create</a>
      </body>
      </html>
          `;
          response.writeHead(200);
          response.end(template);
  
  } else{
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
      let title = queryData.id;
      let template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="index.html">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
          <a href="/create">create</a>
      </body>
      </html>
          `;
          response.writeHead(200);
          response.end(template);
    });
  } 
    
  }else {
    response.writeHead(404);
    response.end('Not found');

  }

 
});
app.listen(3000);