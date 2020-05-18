const posts = require("./api/posts");
const users = require("./api/users");
const tags = require("./api/tags");
const auth = require("./api/auth");

module.exports = (app) => {
  app.use("/api/posts", posts);
  app.use("/api/users", users);
  app.use("/api/tags", tags);
  app.use("/api/auth", auth);
};
