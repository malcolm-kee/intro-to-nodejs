const express = require('express');
const fs = require('fs/promises');
const { existsSync } = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);

  next();
};

const hasFaultyWords = (text) => text.toLowerCase().includes('shit');

const blockFaultyWords = (req, res, next) => {
  if (req.body && hasFaultyWords(JSON.stringify(req.body))) {
    return res.status(400).json({
      message: 'No faulty language please.',
    });
  }

  next();
};

app.use(loggerMiddleware);
app.use(express.json());

const dataFile = path.resolve(__dirname, 'movies.json');

const getMovies = () => {
  if (existsSync(dataFile)) {
    return fs.readFile(dataFile, 'utf-8').then((raw) => JSON.parse(raw));
  }
  return Promise.resolve([]);
};

app.get('/movies', (req, res, next) => {
  getMovies()
    .then((movies) => res.json(movies))
    .catch((err) => next(err));
});

app.post('/movies', blockFaultyWords, (req, res, next) => {
  const { title, language } = req.body;

  if (!title || !language) {
    return res.status(400).send({
      error: `title and language are required.`,
    });
  }

  const id = uuid();

  const movie = {
    id,
    title,
    language,
  };

  getMovies()
    .then((movies) =>
      fs.writeFile(dataFile, JSON.stringify(movies.concat(movie)), 'utf-8')
    )
    .then(() => res.status(201).json(movie))
    .catch((err) => next(err));
});

app.get('/movies/:id', (req, res, next) => {
  getMovies()
    .then((movies) => {
      const movie = movies.find((movie) => movie.id === req.params.id);
      if (!movie) {
        return res.status(404).json({
          error: 'Not found',
        });
      }

      return res.json(movie);
    })
    .catch((err) => next(err));
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

const saveErrorToLogsFile = (err, req, res, next) => {
  console.error(err);

  fs.appendFile(
    'error.log',
    `[${new Date().toLocaleString()}] ${err}${
      err.stack ? `|${err.stack}` : ''
    }\n`,
    'utf-8'
  ).then(() => {
    next(err);
  });
};

app.use(saveErrorToLogsFile);

app.listen(8999, () => {
  console.log('movie api started at http://localhost:8999');
});
