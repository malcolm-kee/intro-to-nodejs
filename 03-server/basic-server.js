const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Hello World`);
});

server.listen(7889, () => {
  console.log('Server listening at port 7889.');
});
