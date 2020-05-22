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

const editPost = async (id, title, body, tags, answerCount, score) => {
  const {
    rows,
  } = await db.query(
    "UPDATE posts SET title = $1, body = $2, tags = $3, answer_count = $4, score = $5 WHERE id = $6 RETURNING *",
    [title, body, tags, answerCount, score, id]
  );
  return rows[0];
};

module.exports = {
  findPostById,
  createPost,
  editPost,
};
