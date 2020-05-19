const posts = require("./api/posts");
const users = require("./api/users");
const tags = require("./api/tags");
const tagCollection = require("./api/tagCollection");
const postsTags = require("./api/postsTags");
const auth = require("./api/auth");

module.exports = (app) => {
  app.use("/api/posts", posts);
  app.use("/api/users", users);
  app.use("/api/tags", tags);
  app.use("/api/tagCollection", tagCollection);
  app.use("/api/postsTags", postsTags);
  app.use("/api/auth", auth);
};
