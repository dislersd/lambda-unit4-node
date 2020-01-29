const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, err => {
      if (err) {
        res.status(401).json({ message: "you can't touch this!" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: "you shall not pass" });
  }
};
