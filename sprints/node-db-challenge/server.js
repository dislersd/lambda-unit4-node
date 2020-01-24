const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Up");
});

module.exports = server;
