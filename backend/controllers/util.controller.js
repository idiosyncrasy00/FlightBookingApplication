const flightModel = require('../models/flight.model.js');
var ObjectId = require('mongodb').ObjectId;

function checkSSIDExists(arr, ssid) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].social_security_id === ssid) {
      return true;
    }
  }
  return false;
}

const flightBooking = async (req, res, next) => {
  try {
    const _list_of_passengers = req.body.list_of_passengers //type array
    let list_of_passengers_arr = [];
    try {
      const res = await flightModel.findById({ _id: req.body._id })
      console.log(res.list_of_passengers)
      list_of_passengers_arr = res.list_of_passengers;
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err.message)
    }
    let check = false;
    //check if social_security_id exists?
    for (let i = 0; i < _list_of_passengers.length; i++) {
      if (checkSSIDExists(list_of_passengers_arr, _list_of_passengers[i].social_security_id) === true) {
        check = true;
        break;
      }
    }
    if (check === false) {
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
      res.status(200).send("updated");
    } else {
      res.status(403).send("Something went wrong.");
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { flightBooking };