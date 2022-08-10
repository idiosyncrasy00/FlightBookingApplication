const paymentModel = require('../models/payment.model.js');
// var ObjectId = require('mongodb').ObjectId;
const validation = require('../validations/payment.validation');

const addPayment = async (req, res, next) => {
  const { error, value } = await validation.registerSchema.validate(req.body);
  if (error) {
    res.status(403).send({ error: error.message });
  } else {
    const newPaymentRecord = new paymentModel(value)
    try {
      await newPaymentRecord.save()
      res.send(newPaymentRecord)
    } catch (error) {
      console.log(error.message);
    }
  }
}

const getPaymentsByUserId = async (req, res, next) => {
  try {
    const paymentHistory = await paymentModel.findById(req.body.user_id);
    res.status(200).send(paymentHistory);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { addPayment, getPaymentsByUserId };

