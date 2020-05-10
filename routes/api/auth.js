const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const {
      rows,
    } = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, crypt($3, gen_salt('bf', 10))) RETURNING *",
      [username, email, password]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const {
      rows,
    } = await db.query(
      "SELECT * FROM users WHERE username = $1 AND password = crypt($2, password)",
      [username, password]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
