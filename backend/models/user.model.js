const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
  },
  lastname: {
    required: true,
    type: String,
  },
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
  payments: {
    type: [String],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);