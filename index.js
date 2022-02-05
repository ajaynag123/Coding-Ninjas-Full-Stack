const http = require('http');
const port = 8000 ;
const fs = require('fs');

const server = http.createServer(requestHandler);
function requestHandler(request, response) {
    fs.readFile('./index.html', function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('404 Not Found');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }


      });      }

server.listen(port,function(err){
  if (err){
    console.log(err);
    return ;
  }
  console.log('Server is listening on port ' + port);
})