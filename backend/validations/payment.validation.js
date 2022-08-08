const Joi = require('joi');

const paymentValidator = Joi.object({
  amount: Joi.string().max(20).required(),
  creditCard_number: Joi.string().max(12).required(),
  flight_id: Joi.string().required(),
  user_id: Joi.string().email().required(),
})

// const editSchema = Joi.object({
//   username: Joi.string().max(20).required(),
//   phoneNumber: Joi.string().max(15).required(),
//   email: Joi.string().email().required(),
// })

module.exports = { paymentValidator }