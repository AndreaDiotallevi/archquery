const db = require("../db");

const findPostById = async (id) => {
  const { rows } = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  return rows[0];
};

const createPost = async (
  title,
  body,
  tags,
  ownerUserId,
  postTypeId,
  parentId
) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO posts (title, body, tags, owner_user_id, post_type_id, parent_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [title, body, tags, ownerUserId, postTypeId, parentId]
  );
  return rows[0];
};

module.exports = {
  findPostById,
  createPost,
};
