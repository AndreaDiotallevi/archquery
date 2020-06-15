const db = require("../db");

const getPosts = async (postTypeId, parentId) => {
  const {
    rows,
  } = await db.query(
    "SELECT * FROM posts WHERE ($1::INT IS NULL OR post_type_id = $1) AND ($2::INT IS NULL OR parent_id = $2) ORDER BY id DESC",
    [postTypeId, parentId]
  );
  return rows;
};

const filterPostsByTag = async (tagName) => {
  const {
    rows,
  } = await db.query(
    "SELECT p.* FROM tags t INNER JOIN posts_tags pt ON (t.id = pt.tag_id) INNER JOIN posts p ON (p.id = pt.post_id) WHERE name = $1",
    [tagName]
  );
  return rows;
};

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

const deletePost = async (id) => {
  await db.query("DELETE FROM posts WHERE id = $1", [id]);
};

const deleteAllPosts = async () => {
  await db.query("TRUNCATE TABLE posts CASCADE;");
};

module.exports = {
  findPostById,
  createPost,
  editPost,
  deletePost,
  getPosts,
  filterPostsByTag,
  deleteAllPosts,
};
``;
