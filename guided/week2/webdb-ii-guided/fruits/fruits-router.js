const express = require("express"); // 1. Bring in express
const knex = require("knex"); // 2. Bring in knex

const knexConfiguration = {
  // client answers: which type of database? (sqlite, postgres, mysql, oracle)?
  client: 'sqlite3', // the db driver
  // the rest will depend on the type of database
  // connection could be a string or an object
  connection: {
    filename: './data/produce.db3'
  },
  useNullAsDefault: true, // ONLY needed for SQLite
}

// db represents a connection to the database
const db = knex(knexConfiguration);

const router = express.Router();

router.get("/", (req, res) => {
  // SELECT * FROM fruits
  // db.select('*').from('fruits').then().catch();
  db("fruits")
    .then(fruits => {
      res.json(fruits);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {

  // SELECT * FROM fruits WHERE id = 2

  const { id } = req.params;

  db("fruits")
    .where({ id })
    .first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const fruitData = req.body;
  db("fruits")
    .insert(fruitData) // With SQLite - By default it returns an array with the last id
    .then(ids => {
      db("fruits")
        .where({ id: ids[0] })
        .then(newFruitEntry => {
          res.status(201).json(newFruitEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
