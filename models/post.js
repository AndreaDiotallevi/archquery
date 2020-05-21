const db = require("../db");

const findPostById = async (id) => {
  const { rows } = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  return rows[0];
};

module.exports = {
  findPostById,
};
