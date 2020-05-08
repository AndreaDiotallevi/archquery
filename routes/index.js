const posts = require("./api/posts");
const users = require("./api/users");

module.exports = (app) => {
  app.use("/api/posts", posts);
  app.use("/api/users", users);
};
