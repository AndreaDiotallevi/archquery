const db = require("../db");

const createPostsTags = async (postId, tagIds) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO posts_tags (post_id, tag_id) VALUES ($1, UNNEST($2::INTEGER[])) RETURNING *",
    [postId, tagIds]
  );
  return rows;
};

const deletePostsTags = async (postId) => {
  await db.query("DELETE FROM posts_tags WHERE post_id = $1", [postId]);
};

module.exports = {
  createPostsTags,
  deletePostsTags,
};
