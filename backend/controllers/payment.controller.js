const paymentModel = require('../models/payment.model.js');
// var ObjectId = require('mongodb').ObjectId;
const validation = require('../validations/payment.validation');

const addPayment = async (req, res, next) => {
  const { error, value } = await validation.paymentValidator.validate(req.body);
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
  // let param = req.query.user_id
  let param = req.params.userId
  //console.log(req.body.user_id)
  console.log(param)
  try {
    const paymentHistory = await paymentModel.find({ user_id: param });
    console.log(paymentHistory)
    res.status(200).send(paymentHistory);
  } catch (error) {
    console.log(error.message);
  }
}

const cancelPayment = async (req, res, next) => {
  // let param = req.query.payment_id
  //console.log(req.body.user_id)
  let param = req.params.paymentId
  console.log(param)
  try {
    const result = await paymentModel.deleteOne({ payment_id: param })
    //res.status(200).send(result);
    res.status(200).send("Delete success!");
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { addPayment, getPaymentsByUserId, cancelPayment };

