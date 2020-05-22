const express = require("express");
const router = express.Router();
const passport = require("../../services/passport");
const {
  findUserByUsername,
  findUserByEmail,
  createUser,
} = require("../../models/user");

module.exports = router;

// @route   Post api/auth/signup
// @desc    Create A User
// @access  Public
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (await findUserByUsername(username)) {
      res.status(400).json({ message: "Username already taken." });
    } else if (await findUserByEmail(email)) {
      res
        .status(400)
        .json({ message: "There is already an account with this email." });
    } else {
      const user = await createUser(username, email, password);
      res.status(200).json(user.id);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   Post api/auth/login
// @desc    Authenticate A User
// @access  Public
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user.id);
    });
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  try {
    req.logOut();
    req.session.destroy(() => {
      res.status(200).json({ mgs: "Successfully logged out" });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/isAlreadyLoggedIn", (req, res) => {
  try {
    res.status(200).json(req.user.id);
  } catch (err) {
    res.status(200).json(false);
  }
});
