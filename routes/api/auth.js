const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { displayName, email, password } = req.body;
    const {
      rows,
    } = await db.query(
      "INSERT INTO users (display_name, email, password_hash) VALUES ($1, $2, crypt($3, gen_salt('bf', 10))) RETURNING *",
      [displayName, email, password]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const {
      rows,
    } = await db.query(
      "SELECT * FROM users WHERE email = $1 AND password_hash = crypt($2, password_hash)",
      [email, password]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
