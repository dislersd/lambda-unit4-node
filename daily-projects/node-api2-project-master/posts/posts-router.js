const Post = require("../data/db");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(err =>
      res.status(500).json({ err, message: "error getting posts" })
    );
});

module.exports = router;
