const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyToken = (req, res, next) => {
  //const token = req.headers["Authorization"];
  let token = req.headers["authorization"];
  console.log("token is ", token)
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
    if (!token || token === '') return res.status(403).send({ error: "No token provided!" });
  } else {
    return res.status(403).send({ error: "Invalid token type" });
  }
  // if (!token)
  //   return res.status(403).send({ error: "No token provided!" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;