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

router.get("/:id", validateUserId, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ error, message: "an error occured" });
  }
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

async function validateUserId(req, res, next) {
  const user = await User.getById(req.params.id);
  user
    ? ((req.user = user), next())
    : res.status(400).json({ message: "user does not exist" });
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
