const express = require("express");
const router = express.Router();
const db = require("../../db");

module.exports = router;

var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
    console.log(user);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await db.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      const user = rows[0];
      console.log(user);
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: "Incorrect password" });
      // }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

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
  passport.authenticate("local", function (err, user, info) {
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
