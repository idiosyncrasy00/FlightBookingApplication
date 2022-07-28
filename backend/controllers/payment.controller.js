const paymentModel = require('../models/payment.model.js');
// var ObjectId = require('mongodb').ObjectId;

const addPayment = async (req, res, next) => {
  const newPaymentRecord = new paymentModel({
    amount: req.body.amount,
    creditCard_number: req.body.creditCard_number,
    flight_id: req.body.flight_id,
    user_id: req.body.user_id
  })
  try {
    await newPaymentRecord.save()
    res.send(newPaymentRecord)
  } catch (error) {
    console.log(error.message);
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

