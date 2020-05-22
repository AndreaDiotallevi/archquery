const db = require("../db");

const createTagCollection = async (tagNames) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO tags (name) VALUES (UNNEST($1::TEXT[])) RETURNING *",
    [tagNames]
  );
  return rows;
};

module.exports = {
  createTagCollection,
};
