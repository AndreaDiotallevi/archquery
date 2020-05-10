const db = require("../db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const isValidPassword = (userPassword, databasePassword) => {
  return bcrypt.compare(userPassword, databasePassword);
};

const createUser = async ({ username, email, password }) => {
  const hash = await bcrypt.hash(password, saltRounds);
  const {
    rows,
  } = await db.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, hash]
  );
  return rows[0];
};

const findUserById = async (id) => {
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
};

const findUserByUsername = async (username) => {
  const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
};

module.exports = {
  isValidPassword,
  createUser,
  findUserById,
  findUserByUsername,
};
