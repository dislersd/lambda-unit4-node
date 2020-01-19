const express = require("express");
const User = require("./userDb");

const router = express.Router();
router.use(express.json());

router.post("/", (req, res) => {
  const user = req.body;
  User.insert(user)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({ message: "error creating user" }));
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", async (req, res) => {
  try {
    const users = await User.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error getting users" });
  }
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
