const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().max(20).required(),
  password: Joi.string().max(15).required(),
  phoneNumber: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
})

const editSchema = Joi.object({
  username: Joi.string().max(20).required(),
  phoneNumber: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
})

module.exports = { registerSchema, editSchema }