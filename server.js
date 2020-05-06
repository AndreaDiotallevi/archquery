const express = require("express");
const app = express();
const path = require("path");
const mountRoutes = require("./routes");

// Middleware
app.use(express.json());

// Routes
mountRoutes(app);

// Production Setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

module.exports = app;
