const db = require("../db");

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
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

module.exports = passport;
