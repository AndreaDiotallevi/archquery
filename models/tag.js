const db = require("../db");

const createTag = async (name) => {
  const {
    rows,
  } = await db.query("INSERT INTO tags (name) VALUES ($1) RETURNING *", [name]);
  return rows[0];
};

const findTagById = async (id) => {
  const { rows } = await db.query("SELECT * FROM tags WHERE id = $1", [id]);
  return rows[0];
};

module.exports = {
  createTag,
  findTagById,
};
