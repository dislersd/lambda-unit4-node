const express = require("express");
const User = require("./userDb");
const Post = require("../posts/postDb");

const router = express.Router();
router.use(express.json());

router.post("/", validateUser, (req, res) => {
  const user = req.body;
  User.insert(user)
    .then(response => res.status(200).json(response))
    .catch(err =>
      res.status(500).json({ err, message: "error creating user" })
    );
});

router.post("/:id/posts", validatePost, validateUserId, (req, res) => {
  const postData = { ...req.body, user_id: req.params.id };
  Post.insert(postData)
    .then(response => res.status(201).json(response))
    .catch(err =>
      res.status(500).json({ err, message: "error creating post" })
    );
});

router.get("/", async (req, res) => {
  try {
    const users = await User.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error getting users" });
  }
});

router.get("/:id", validateUserId, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ error, message: "an error occured" });
  }
});

router.get("/:id/posts", (req, res) => {
  User.getUserPosts(req.params.id)
    .then(posts => res.status(200).json(posts))
    .catch(err =>
      res.status(500).json({ err, message: "error getting posts" })
    );
});

router.delete("/:id", (req, res) => {
  User.remove(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(err =>
      res.status(500).json({ err, message: "error deleting user" })
    );
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

async function validateUserId(req, res, next) {
  const user = await User.getById(req.params.id);
  user
    ? ((req.user = user), next())
    : res.status(400).json({ message: "invalid user id" });
}

function validateUser(req, res, next) {
  req.body && Object.keys(req.body).length > 0
    ? req.body.name
      ? next()
      : res.status(400).json({ message: "missing required name field" })
    : res.status(400).json({ message: "missing user data" });
}

function validatePost(req, res, next) {
  req.body && Object.keys(req.body).length > 0
    ? req.body.text
      ? next()
      : res.status(400).json({ message: "missing required text field" })
    : res.status(400).json({ message: "missing post data" });
}

module.exports = router;
