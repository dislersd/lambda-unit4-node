const express = require("express");
const router = express.Router();
const Accounts = require("./accountsModel");

router.get("/", (req, res) => {
  Accounts.get()
    .then(a => res.status(200).json(a))
    .catch(err =>
      res.status(500).json({ err, message: "error getting accounts" })
    );
});

module.exports = router;
