const http = require('http');

const server = http.createServer((req, res) => {
  res.end(Math.random().toString());
});

server.listen(7877, () => {
  console.log('Server listening at port 7877');
});
