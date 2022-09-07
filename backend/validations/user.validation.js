const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(20).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
})

const editSchema = Joi.object({
  _id: Joi.string(),
  username: Joi.string().max(20).required(),
  phoneNumber: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
})

module.exports = { registerSchema, editSchema }