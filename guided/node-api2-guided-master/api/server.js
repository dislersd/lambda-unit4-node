const express = require("express");
const server = express();

const hubsRouter = require("../hubs/hubs-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter);

module.exports = server;
