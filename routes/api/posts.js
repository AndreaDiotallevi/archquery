const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

// // @route   GET api/posts
// // @desc    Get All Posts
// // @access  Public
router.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM posts ORDER BY id ASC");
    if (!rows) throw Error("No posts found");
    res.status(200).json(rows);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   Get api/posts/:id
// @desc    Get A Post
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// // @route   POST api/posts
// // @desc    Create A Post
// // @access  Public
router.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const {
      rows,
    } = await db.query(
      "INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING *",
      [title, body]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// // @route    EDIT api/posts/:id
// // @desc     Edit a Post By Id
// // @access   Public
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const {
      rows,
    } = await db.query(
      "UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *",
      [title, body, id]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// // @route    DELETE api/posts/:id
// // @desc     Delete a Post By Id
// // @access   Public
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM posts WHERE id = $1", [id]);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err.message, success: false });
  }
});
