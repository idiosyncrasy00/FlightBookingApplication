const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
  brand: {
    required: true,
    type: String,
  },
  destination: {
    required: true,
    type: String,
  },
  arrivalTime: {
    required: true,
    type: String,
  },
  departureTime: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  //to check the number of booked flights
  capacity: {
    required: true,
    type: Number,
  },

  num_of_booked: {
    type: Number,
    default: 0,
  }
})

module.exports = mongoose.model('Flight', flightSchema);