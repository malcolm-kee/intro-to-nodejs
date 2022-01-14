const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require('fs');
const { query } = require('../db');

const dataFile = path.resolve(__dirname, 'movies.json');

const getMovies = ({ limit = 10, offset = 0 } = {}) => {
  return new Promise((fulfill, reject) => {
    query(
      'SELECT * FROM movies LIMIT $1 OFFSET $2',
      [limit, offset],
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        fulfill(result.rows);
      }
    );
  });
};

exports.getMovies = getMovies;

const addMovie = ({ title, language }) => {
  return new Promise((fulfill, reject) => {
    query(
      'INSERT INTO movies (title, language) VALUES ($1, $2) RETURNING *',
      [title, language],
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        fulfill(result.rows[0]);
      }
    );
  });
};

exports.addMovie = addMovie;

const getOneMovie = (id) => {
  return new Promise((fulfill, reject) => {
    query('SELECT * FROM movies WHERE id = $1', [id], (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      fulfill(result.rows[0]);
    });
  });
};

exports.getOneMovie = getOneMovie;
