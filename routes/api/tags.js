const express = require("express");
const router = express.Router();
const db = require("../../db");
const { createTag, findTagByName } = require("../../models/tag");

module.exports = router;

// @route   Get api/tags
// @desc    Get All Tags
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM tags;");
    res.status(200).json(rows);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   Get api/tags/:name
// @desc    Get A Tag By Name
// @access  Public
router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
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
    const tag = await createTag(name);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
