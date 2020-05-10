const express = require("express");
const router = express.Router();
const { findUserById } = require("../../models/user");

module.exports = router;

// @route   Get api/users/:id
// @desc    Get A User
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
