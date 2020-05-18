const express = require("express");
const router = express.Router();
const db = require("../../db");
const { findTagByName } = require("../../models/tag");

module.exports = router;

// @route   Get api/tags
// @desc    Get A Tag
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const tag = await findTagByName(name);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   Post api/tags
// @desc    Create A Tag
// @access  Public
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
