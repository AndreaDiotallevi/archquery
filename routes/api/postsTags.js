const express = require("express");
const router = express.Router();
const { createPostsTags, deletePostsTags } = require("../../models/postsTags");

module.exports = router;

// // @route   POST api/postsTags
// // @desc    Create A PostsTags
// // @access  Public
router.post("/", async (req, res) => {
  try {
    const { postId, tagIds } = req.body;
    const postsTags = await createPostsTags(postId, tagIds);
    res.status(200).json(postsTags);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // @route    DELETE api/postsTags/:postId
// // @desc     Delete a PostsTags By postId
// // @access   Public
router.delete("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    await deletePostsTags(postId);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
