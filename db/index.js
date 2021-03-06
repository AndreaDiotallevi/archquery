const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database:
    process.env.NODE_ENV === "test"
      ? process.env.PG_DATABASE_TEST
      : process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // Coming from Heroku addons
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
