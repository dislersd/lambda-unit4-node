const express = require("express");
const postRouter = require("./posts/posts-router");

const server = express();
server.use(express.json());

server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = server;
