const path = require('path');
const fs = require('fs/promises');
const { v4: uuid } = require('uuid');
const { existsSync } = require('fs');

const dataFile = path.resolve(__dirname, 'movies.json');

const getMovies = () => {
  if (existsSync(dataFile)) {
    return fs.readFile(dataFile, 'utf-8').then((raw) => JSON.parse(raw));
  }
  return Promise.resolve([]);
};

exports.getMovies = getMovies;

const addMovie = ({ title, language }) => {
  const id = uuid();

  const movie = {
    id,
    title,
    language,
  };

  return getMovies()
    .then((movies) =>
      fs.writeFile(dataFile, JSON.stringify(movies.concat(movie)), 'utf-8')
    )
    .then(() => movie);
};

exports.addMovie = addMovie;

const getOneMovie = (id) => {
  return getMovies().then((movies) => movies.find((movie) => movie.id === id));
};

exports.getOneMovie = getOneMovie;
