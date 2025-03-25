// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// Create a new file named comments.js and add the following code:
const http = require('http');
const fs = require('fs');
const path = require('path');   // path module  // path module is used to handle and transform file paths   // path module is used to handle and transform file paths
const server = http.createServer((req, res) => {                // createServer() method creates an HTTP server object
  if (req.url === '/') {                                        // if the request URL   is '/'
    fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {  // read the file comments.html
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    }
    );
  }