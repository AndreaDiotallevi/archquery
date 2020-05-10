const express = require("express");
const router = express.Router();
const passport = require("../../services/passport");
const db = require("../../db");

module.exports = router;

router.post("/signup", async (req, res) => {
  try {
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

router.post("/login", function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});
