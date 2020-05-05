const express = require("express");
const router = express.Router();

// Post Model
const Post = require("../../models/Post");

// @route   GET api/posts
// @desc    Get All Posts
// @access  Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) throw Error("No posts");

    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   Get api/posts/:id
// @desc    Get A Post
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw Error("No post found");

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   POST api/posts
// @desc    Create A Post
// @access  Public
router.post("/", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    creationDate: Date.now(),
  });

  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong saving the post");

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a Post By Id
// @access   Public
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw Error("No post found");

    const removed = await post.remove();
    if (!removed) {
      throw Error("Something went wrong while trying to delete the post");
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err.message, success: false });
  }
});

module.exports = router;
