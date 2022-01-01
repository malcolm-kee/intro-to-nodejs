const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.get('/end', (req, res) => {
  res.end('Bye');
});

app.post('/end', (req, res) => {
  res.json({
    message: 'bye',
    sent: req.body,
  });
});

app.all('*', (req, res) => {
  res.status(404).send(`Not Found`);
});

app.listen(7889, () => {
  console.log('Server listening at port 7889.');
});
