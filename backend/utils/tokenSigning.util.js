const jwt = require('jsonwebtoken');

//param is an object type
const jwtSigning = (user) => {
  return jwt.sign({
    id: user._id.toString(), isAdmin: user.isAdmin
  }, process.env.JWT)
}

module.exports = jwtSigning