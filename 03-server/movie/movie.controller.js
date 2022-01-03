const express = require('express');
const movieService = require('./movie.service');

const movieController = express.Router();

const hasFaultyWords = (text) => text.toLowerCase().includes('shit');

const blockFaultyWords = (req, res, next) => {
  if (req.body && hasFaultyWords(JSON.stringify(req.body))) {
    return res.status(400).json({
      message: 'No faulty language please.',
    });
  }

  next();
};

movieController.get('/', (req, res, next) => {
  movieService
    .getMovies()
    .then((movies) => res.json(movies))
    .catch((err) => next(err));
});

movieController.post('/', blockFaultyWords, (req, res, next) => {
  const { title, language } = req.body;

  if (!title || !language) {
    return res.status(400).send({
      error: `title and language are required.`,
    });
  }

  movieService
    .addMovie({ title, language })
    .then((movie) => res.status(201).json(movie))
    .catch((err) => next(err));
});

movieController.get('/:id', (req, res, next) => {
  movieService
    .getOneMovie(req.params.id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({
          error: 'Not found',
        });
      }

      return res.json(movie);
    })
    .catch((err) => next(err));
});

exports.movieController = movieController;
