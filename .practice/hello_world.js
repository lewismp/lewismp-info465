/*
Marshall Lewis
INFO 465 - Dr. McGarry
*/

// This is a simple web server that listens on port 3000 and responds with "Hello World" to all requests.
// This code is based on the 'Hello World' example at https://nodejs.org/en/about/
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});