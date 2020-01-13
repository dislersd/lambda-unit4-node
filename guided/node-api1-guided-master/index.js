// import express from 'express' // ES2015 module syntax
const express = require("express"); // commonJs modules

const server = express();

// routes or endpoints

// GET to '/'
server.get("/", function(req, res) {
  res.send("<h1>hello world</h1>");
});

const port = 8000;

server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));

console.log("alive");
