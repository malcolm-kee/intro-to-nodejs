const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);

  next();
};

app.use(loggerMiddleware);
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

app.get('/movies/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === Number(req.params.id));

  if (!movie) {
    return res.status(404).json({
      error: 'Not found',
    });
  }

  return res.json(movie);
});

app.all('*', (req, res) => {
  if (req.headers.accept === 'application/json') {
    return res.status(404).json({
      error: 'Not found',
    });
  }

  return res.status(404).send(`<!DOCTYPE html>
  <html>
    <body>
        <h1>Page Not Found</h1>
    </body>
    </html>`);
});

app.listen(8999, () => {
  console.log('movie api started at http://localhost:8999');
});
