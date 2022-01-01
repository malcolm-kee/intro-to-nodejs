const express = require('express');
const app = express();

app.all('*', (req, res) => {
  const accept = req.headers.accept;

  if (accept === 'application/json') {
    return res.json({
      number: Math.random(),
    });
  }

  return res.status(200).send(Math.random().toString());
});

app.listen(7877, () => {
  console.log('Server listening at port 7877');
});
