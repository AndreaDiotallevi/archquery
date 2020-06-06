const express = require("express");
const router = express.Router();
const {
  findPostById,
  createPost,
  editPost,
  deletePost,
  getPosts,
  filterPostsByTag,
} = require("../../models/post");

module.exports = router;

// // @route   GET api/posts
// // @desc    Get Posts
// // @access  Public
router.get("/", async (req, res) => {
  try {
    const { postTypeId, parentId, tagName } = req.query;
    const posts = tagName
      ? await filterPostsByTag(tagName)
      : await getPosts(postTypeId, parentId);
    if (!posts) throw Error("No posts found");
    res.status(200).json(posts);
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
    const post = await findPostById(id);

    const title = req.body.title || post.title;
    const body = req.body.body || post.body;
    const tags = req.body.tags || post.tags;
    const answerCount =
      req.body.answerCount === undefined
        ? post.answer_count
        : req.body.answerCount;
    const score = req.body.score === undefined ? post.score : req.body.score;

    const editedPost = await editPost(
      id,
      title,
      body,
      tags,
      answerCount,
      score
    );
    res.status(200).json(editedPost);
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
    await deletePost(id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message, success: false });
  }
});
