const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'studemy_learning',
  port: 5432,
});

pool.query(
  "UPDATE teachers SET salary = 1500 WHERE full_name = 'Emma Watson';",
  (err) => {
    if (err) {
      console.error(err);
    }
    pool.end();
  }
);
