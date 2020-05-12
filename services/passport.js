const bcrypt = require("bcrypt");
const { findUserById, findUserByUsername } = require("../models/user");

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

module.exports = passport;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "Username not found" });
      }
      if (!(await isValidPassword(password, user.password))) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Helpers

const isValidPassword = async (userPassword, databasePassword) => {
  return await bcrypt.compare(userPassword, databasePassword);
};
