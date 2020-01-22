const express = require("express");
const router = express.Router();

const Cars = require("./carsModel");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error, message: "error getting cars" });
  }
});

router.post("/", (req, res) => {
  Cars.insert(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => res.status(500).json({ err, message: "error posting car" }));
});

module.exports = router;
