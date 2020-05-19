const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

router.post("/", async (req, res) => {
  try {
    const { names } = req.body;
    const {
      rows,
    } = await db.query(
      "INSERT INTO tags (name) VALUES (UNNEST($1::TEXT[])) RETURNING *",
      [names]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
