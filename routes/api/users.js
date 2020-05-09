const express = require("express");
const router = express.Router();
const db = require("../../db");

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
