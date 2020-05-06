const express = require("express");
const path = require("path");
const mountRoutes = require("./routes");

const app = express();
app.use(express.json());

mountRoutes(app);

module.exports = app;
