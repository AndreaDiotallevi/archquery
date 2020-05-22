const db = require("../db");

const getTags = async () => {
  const { rows } = await db.query("SELECT * FROM tags;");
  return rows;
};

const findTagByName = async (name) => {
  const { rows } = await db.query("SELECT * FROM tags WHERE name = $1", [name]);
  return rows[0];
};

const createTag = async (name) => {
  const {
    rows,
  } = await db.query("INSERT INTO tags (name) VALUES ($1) RETURNING *", [name]);
  return rows[0];
};

module.exports = {
  getTags,
  findTagByName,
  createTag,
};
