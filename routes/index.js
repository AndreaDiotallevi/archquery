const posts = require("./api/posts");

module.exports = (app) => {
  app.use("/api/posts", posts);
};
