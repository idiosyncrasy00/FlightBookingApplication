const flightModel = require('../models/flight.model.js');
var ObjectId = require('mongodb').ObjectId;


const flightBooking = async (req, res, next) => {
  try {
    // let flightID = String(req.body._id);
    // let update = flightModel.findOne({ _id: ObjectId("62e025e1b799624934490003") })
    // flightModel.findOneAndUpdate(
    //   { _id: req.body._id },
    //   {
    //     $inc: {
    //       'num_of_booked': 1
    //     }
    //   }).exec()
    // const addedField = {
    //   first_name: req.body.first_name,
    //   last_name: req.body.last_name,
    //   social_security_id: req.body.social_security_id,
    // }
    const _list_of_passengers = req.body.list_of_passengers //type array
    for (let i = 0; i < _list_of_passengers.length; i++) {
      await flightModel.findOneAndUpdate(
        { _id: req.body._id },
        {
          $push: {
            list_of_passengers: {
              first_name: _list_of_passengers[i].first_name,
              last_name: _list_of_passengers[i].last_name,
              social_security_id: _list_of_passengers[i].social_security_id,
            }
          }
        }
      ).exec()
    }
    res.status(200).send("update");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { flightBooking };