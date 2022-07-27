const flightModel = require('../models/flight.model.js');
var ObjectId = require('mongodb').ObjectId;


const flightBooking = async (req, res, next) => {
  try {
    // let flightID = String(req.body._id);
    // let update = flightModel.findOne({ _id: ObjectId("62e025e1b799624934490003") })
    flightModel.findOneAndUpdate(
      { _id: req.body._id },
      {
        $inc: {
          'num_of_booked': 1
        }
      }).exec()
    res.status(200).send("update");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { flightBooking };