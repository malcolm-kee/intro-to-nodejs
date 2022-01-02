const express = require('express');
const app = express();

app.use(express.json());

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
