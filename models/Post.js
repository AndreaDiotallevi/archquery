const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  deletionDate: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("post", Post);
