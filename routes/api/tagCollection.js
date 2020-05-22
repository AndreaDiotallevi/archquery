const express = require("express");
const router = express.Router();
const { createTagCollection } = require("../../models/tagCollection");

module.exports = router;

router.post("/", async (req, res) => {
  try {
    const { tagNames } = req.body;
    const tagCollection = await createTagCollection(tagNames);
    res.status(200).json(tagCollection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
