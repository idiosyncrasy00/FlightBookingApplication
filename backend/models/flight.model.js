const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
  image: {
    required: true,
    type: String,
  },
  brand: {
    required: true,
    type: String,
  },
  from: {
    required: true,
    type: String,
  },
  to: {
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

  arrivalDate: {
    required: true,
    type: String,
  },
  departureDate: {
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

  /**
   * element type
   * {
   * first_name
   * last_name
   * social_security_id
   * payment_id
   * }
   */
  list_of_passengers: {
    type: Array,
    default: [],
  }
})

module.exports = mongoose.model('Flight', flightSchema);