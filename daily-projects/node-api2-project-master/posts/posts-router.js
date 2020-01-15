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

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ err, message: "error getting post" }));
});

router.get("/:id/comments", (req, res) => {
  Post.findPostComments(req.params.id)
    .then(comments => res.status(200).json(comments))
    .catch(err =>
      res.status(500).json({ err, message: "error getting comments" })
    );
});

module.exports = router;
