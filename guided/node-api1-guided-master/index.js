// import express from 'express' // ES2015 module syntax
const express = require("express"); // commonJs modules

const Hubs = require("./data/hubs-model");

const server = express();

server.use(express.json());

// routes or endpoints

// GET to '/'
server.get("/", function(req, res) {
  res.send({ hello: "Web 25!" });
});

// See a list of Hubs
server.get("/api/hubs", (req, res) => {
  Hubs.find() // will return a promis
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      console.log(err);
      // handle the error
      res.status(500).json({ errorMessage: "Sorry there was an error" });
    });
});
// Create a Hub
server.post("/api/hubs", (req, res) => {
  const hubData = req.body; // for this to work you need the server.use(express.json()) above

  Hubs.add(hubData)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Sorry there was an error" });
    });
});

// Delete a Hub
server.delete("/api/hubs/:id", (req, res) => {
  const id = req.params.id;

  Hubs.remove(id)
    //.then(res => res.status(204).end()) one response possibility just sending status code
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "There was an error deleting" });
    });
});

// Update a Hub

const port = 8000;

server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));

console.log("alive");
