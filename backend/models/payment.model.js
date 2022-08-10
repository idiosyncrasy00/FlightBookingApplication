const mongoose = require('mongoose')

const { Schema } = mongoose;


const paymentSchema = Schema({
  amount: {
    required: true,
    type: Number,
  },
  bankName: {
    required: true,
    type: String,
  },
  creditCard_number: {
    required: true,
    type: String,
  },
  flight_id: {
    required: true,
    // Schema.Types.ObjectId
    type: Schema.Types.ObjectId,
    ref: 'Flight',
  },
  user_id: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('Payment', paymentSchema);