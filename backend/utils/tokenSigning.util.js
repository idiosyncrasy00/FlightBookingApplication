const jwt = require('jsonwebtoken');

//param is an object type
const jwtSigning = (user) => {
  return jwt.sign({
    id: user._id, isAdmin: user.isAdmin
  }, process.env.JWT)
}

module.exports = jwtSigning