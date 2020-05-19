const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

router.post("/", async (req, res) => {
  try {
    const { postId, tagIds } = req.body;
    const {
      rows,
    } = await db.query(
      "INSERT INTO posts_tags (post_id, tag_id) VALUES ($1, UNNEST($2::INTEGER[])) RETURNING *",
      [postId, tagIds]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    await db.query("DELETE FROM posts_tags WHERE post_id = $1", [postId]);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
