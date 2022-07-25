const bcrypt = require('bcrypt');

const numberOfSaltGen = 10;

async function hashedPassword(password) {
  const salt = await bcrypt.genSalt(numberOfSaltGen);
  password = await bcrypt.hash(password, salt);
  return password;
}

module.exports = hashedPassword