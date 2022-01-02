const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toLocaleString()}`);
  next();
};

const jsonBodyMiddleware = (req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      const bodyData = JSON.parse(data);

      req.body = bodyData;

      next();
    });
  } else {
    next();
  }
};

app.use(loggerMiddleware);
// app.use(express.json());
app.use(jsonBodyMiddleware);

const pokemons = [];
let _id = 0;

app.get('/pokemons', (req, res) => res.json(pokemons));

app.post('/pokemons', (req, res) => {
  const { name, types } = req.body;

  if (
    !name ||
    !Array.isArray(types) ||
    types.some((type) => typeof type !== 'string')
  ) {
    return res.status(400).json({
      message: 'name should be string and types should be array of string.',
    });
  }

  const pokemon = {
    id: _id++,
    name,
    types,
  };

  pokemons.push(pokemon);

  return res.status(201).json(pokemon);
});

app.get('/pokemons/:id', (req, res) => {
  const pokemon = pokemons.find(
    (pokemon) => String(pokemon.id) === req.params.id
  );

  if (pokemon) {
    return res.json(pokemon);
  } else {
    return res.status(404).json({
      message: 'Not found',
    });
  }
});

app.all('*', (req, res) =>
  res.status(404).json({
    message: 'Not found',
  })
);

app.listen(8999, () =>
  console.log('Pokemon api started at http://localhost:8999')
);
