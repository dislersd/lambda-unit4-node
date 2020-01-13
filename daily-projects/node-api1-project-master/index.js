// implement your API here
const express = require("express");
const Users = require("./data/db");

const server = express();
server.use(express.json());

const port = 8000;
server.listen(port, () => {
  console.log(`\n ** Server running on port: ${port} **\n`);
});

server.get("/", (req, res) => res.send("Hello!"));

server.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error getting users" });
  }
});

server.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.find(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "error getting user" });
  }
});

server.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const response = await Users.insert(user);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "error creating user" });
  }
});

server.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  Users.remove(id)
    .then(response => res.status(200).json(response))
    .catch(err =>
      res.status(500).json({ err, message: "error deleting user" })
    );
});

server.put("/users/:id", (req, res) => {
  const update = req.body;
  const id = req.params.id;
  Users.update(id, update)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({ err, message: "error updating use" }));
});
