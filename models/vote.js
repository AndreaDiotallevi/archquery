const db = require("../db");

const createVote = async (postId, voteTypeId, userId) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO votes (post_id, vote_type_id, user_id) VALUES ($1, $2, $3) RETURNING *",
    [postId, voteTypeId, userId]
  );
  return rows[0];
};

const getVotes = async (postId, userId) => {
  const {
    rows,
  } = await db.query(
    "SELECT * FROM votes WHERE ($1::INT IS NULL OR post_id = $1) AND ($2::INT IS NULL OR user_id = $2)",
    [postId, userId]
  );
  return rows;
};

module.exports = {
  createVote,
  getVotes,
};
