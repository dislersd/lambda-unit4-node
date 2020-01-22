const express = require("express");
const server = express();
const carsRouter = require("./resources/carsRouter");

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("working");
});

module.exports = server;
