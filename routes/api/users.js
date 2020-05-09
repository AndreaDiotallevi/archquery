const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = router;

// @route   Get api/users/:id
// @desc    Get A User
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// // @route   POST api/users
// // @desc    Create A User
// // @access  Public
router.post("/", async (req, res) => {
  try {
    const { displayName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const {
      rows,
    } = await db.query(
      "INSERT INTO users (display_name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [displayName, email, passwordHash]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
