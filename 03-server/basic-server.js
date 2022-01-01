const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Hello World');
  }

  if (req.url === '/end') {
    if (req.method === 'POST') {
      let data = '';

      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        const bodyData = JSON.parse(data);
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        return res.end(
          JSON.stringify({
            message: 'Bye',
            sent: bodyData,
          })
        );
      });
    } else {
      return res.end('Bye!');
    }
  } else {
    res.writeHead(404);
    res.end(`Not Found`);
  }
});

server.listen(7889, () => {
  console.log('Server listening at port 7889.');
});
