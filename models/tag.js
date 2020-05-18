const db = require("../db");

const createTag = async (name) => {
  const {
    rows,
  } = await db.query("INSERT INTO tags (name) VALUES ($1) RETURNING *", [name]);
  return rows[0];
};

const findTagByName = async (name) => {
  const { rows } = await db.query("SELECT * FROM tags WHERE name = $1", [name]);
  return rows[0];
};

module.exports = {
  createTag,
  findTagByName,
};
