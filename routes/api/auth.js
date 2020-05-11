const express = require("express");
const router = express.Router();
const passport = require("../../services/passport");
const { createUser } = require("../../models/user");

module.exports = router;

// @route   Post api/auth/signup
// @desc    Create A User
// @access  Public
router.post("/signup", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// @route   Post api/auth/login
// @desc    Authenticate A User
// @access  Public
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
      console.log("/////////////////////////////////////");
      console.log("Inside login - req.session: ", req.session);
      console.log("Inside login - req.sessionID: ", req.sessionID);
      console.log("Here", req.session.passport.user);
      return res.status(200).json(user.id);
    });
  })(req, res, next);
});

router.post("/logout", function (req, res) {
  req.logOut();
  res.status(200).json({ mgs: "Successfully logged out" });
});
