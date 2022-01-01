const express = require('express');
const app = express();

app.use(express.json());

const movies = [];

let _id = 0;

app.get('/movies', (req, res) => res.json(movies));

app.post('/movies', (req, res) => {
  const { title, language } = req.body;

  if (!title || !language) {
    return res.status(400).send({
      error: `title and language are required.`,
    });
  }

  const id = _id++;

  const movie = {
    id,
    title,
    language,
  };
  movies.push(movie);

  res.status(201).json(movie);
});

app.listen(8999, () => {
  console.log('movie api started at http://localhost:8999');
});
