const express = require('express');
const fs = require('fs/promises');
const app = express();

const { movieController } = require('./movie/movie.controller');

const loggerMiddleware = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);

  next();
};

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
