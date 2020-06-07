const express = require("express");
const router = express.Router();

const upload = require("../../services/fileUpload");
const singleUpload = upload.single("image");

module.exports = router;

router.post("/", (req, res) => {
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }
    return res.json({ url: req.file.location });
  });
});
