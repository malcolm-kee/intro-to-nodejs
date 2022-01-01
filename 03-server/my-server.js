const http = require('http');

const server = http.createServer((req, res) => {
  const accept = req.headers.accept;

  if (accept === 'application/json') {
    return res.end(
      JSON.stringify({
        number: Math.random(),
      })
    );
  }

  res.end(Math.random().toString());
});

server.listen(7877, () => {
  console.log('Server listening at port 7877');
});
