const express = require("express");
const router = express.Router();
const db = require("../../db");
const { findTagById } = require("../../models/tag");

module.exports = router;

// @route   Get api/tags/:id
// @desc    Get A Tag
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await findTagById(id);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const {
      rows,
    } = await db.query("INSERT INTO tags (name) VALUES ($1) RETURNING *", [
      name,
    ]);
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.get("/", async (req, res) => {
//   const { postId } = req.query;
//   let databaseResponse;
//   console.log(postId);

//   try {
//     if (!postId) {
//       databaseResponse = await db.query("SELECT * FROM tags;");
//     } else {
//       databaseResponse = await db.query(
//         "SELECT t.* FROM posts_tags pt INNER JOIN tags t ON (t.id = pt.tag_id) WHERE post_id = $1",
//         [postId]
//       );
//     }
//     res.status(200).json(databaseResponse.rows);
//   } catch (err) {
//     res.status(400).json({ msg: err.message });
//   }
// });
