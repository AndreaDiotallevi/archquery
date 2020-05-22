const express = require("express");
const router = express.Router();
const db = require("../../db");
const { findPostById, createPost, editPost } = require("../../models/post");

module.exports = router;

// // @route   GET api/posts
// // @desc    Get Posts
// // @access  Public
router.get("/", async (req, res) => {
  try {
    const { postTypeId, parentId, tagName } = req.query;
    let databaseResponse;
    if (!tagName) {
      databaseResponse = await db.query(
        "SELECT * FROM posts WHERE ($1::INT IS NULL OR post_type_id = $1) AND ($2::INT IS NULL OR parent_id = $2) ORDER BY id DESC",
        [postTypeId, parentId]
      );
    } else {
      databaseResponse = await db.query(
        "SELECT p.* FROM tags t INNER JOIN posts_tags pt ON (t.id = pt.tag_id) INNER JOIN posts p ON (p.id = pt.post_id) WHERE name = $1",
        [tagName]
      );
    }
    if (!databaseResponse.rows) throw Error("No posts found");
    res.status(200).json(databaseResponse.rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   Get api/posts/:id
// @desc    Get A Post
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await findPostById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // @route   POST api/posts
// // @desc    Create A Post
// // @access  Public
router.post("/", async (req, res) => {
  try {
    const { title, body, tags, ownerUserId, postTypeId, parentId } = req.body;
    const post = await createPost(
      title,
      body,
      tags,
      ownerUserId,
      postTypeId,
      parentId
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // @route    EDIT api/posts/:id
// // @desc     Edit a Post By Id
// // @access   Public
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, tags, answerCount, score } = req.body;
    const post = await editPost(id, title, body, tags, answerCount, score);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
    res.status(400).json({ message: err.message, success: false });
  }
});
