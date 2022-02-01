var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 3000;

http.createServer(function (request, response){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin' : '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');

    //Send the response body as "Hello World"
    readStream.pipe(response);
}).listen(PORT);

//Console will print the message
console.log(`Server running at http://127.0.0.1:${PORT}/`);