const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'medical_db',
  password: 'deboradaf31', // замени, если у тебя другой пароль
  port: 5432,
});

module.exports = pool;