const express = require('express');
const fs = require('fs/promises');
const app = express();

const { movieController } = require('./movie/movie.controller');
const { loggerMiddleware } = require('./middleware/logger.middleware');
const {
  saveErrorToLogFile,
} = require('./error-handler/save-error-to-log-file');
const { query } = require('./db');

query('SELECT * FROM students;', [], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('rows', result.rows);
});

app.use(loggerMiddleware);
app.use(express.json());

app.use('/movies', movieController);

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

app.use(saveErrorToLogFile);

app.listen(8999, () => {
  console.log('movie api started at http://localhost:8999');
});
