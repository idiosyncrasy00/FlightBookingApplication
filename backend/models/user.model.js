const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: Number,
    unique: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);