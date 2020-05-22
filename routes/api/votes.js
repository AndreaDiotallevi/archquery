const express = require("express");
const router = express.Router();
const { createVote, getVotes } = require("../../models/vote");

module.exports = router;

// // @route   POST api/votes
// // @desc    Create A Vote
// // @access  Public
router.post("/", async (req, res) => {
  try {
    const { postId, voteTypeId, userId } = req.body;
    const post = await createVote(postId, voteTypeId, userId);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // @route   GET api/votes
// // @desc    Get Votes
// // @access  Public
router.get("/", async (req, res) => {
  try {
    const { postId, userId } = req.query;
    const votes = await getVotes(postId, userId);
    res.status(200).json(votes);
  } catch (err) {
    console.log(err);
  }
});
