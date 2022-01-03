const fs = require('fs/promises');
const express = require('express');
const app = express();

const { pokemonController } = require('./pokemon/pokemon.controller');

const loggerMiddleware = (req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toLocaleString()}`);
  next();
};

// const jsonBodyMiddleware = (req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     let data = '';

//     req.on('data', (chunk) => {
//       data += chunk;
//     });

//     req.on('end', () => {
//       const bodyData = JSON.parse(data);

//       req.body = bodyData;

//       next();
//     });
//   } else {
//     next();
//   }
// };

app.use(loggerMiddleware);
app.use(express.json());
// app.use(jsonBodyMiddleware);

app.use('/pokemons', pokemonController);

app.all('*', (req, res) =>
  res.status(404).json({
    message: 'Not found',
  })
);

function saveErrorToLogs(err, req, res, next) {
  fs.appendFile('error.log', `${err}\n`, 'utf-8').then(() => next(err));
}

app.use(saveErrorToLogs);

app.listen(8999, () =>
  console.log('Pokemon api started at http://localhost:8999')
);
