const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  amount: {
    required: true,
    type: Number,
  },
  creditCard_number: {
    required: true,
    type: String,
  },
  flight_id: {
    required: true,
    type: { type: Schema.Types.ObjectId, ref: 'Flight' },
  },
  user_id: {
    required: true,
    type: { type: Schema.Types.ObjectId, ref: 'User' },
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('Payment', paymentSchema);