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
  const _list_of_passengers = req.body.list_of_passengers //type array
  let list_of_passengers_arr = [];
  let check = false;
  let capacity = 0;
  try {
    try {
      const res = await flightModel.findById({ _id: req.body._id })
      console.log(res)
      console.log(res.list_of_passengers)
      list_of_passengers_arr = res.list_of_passengers;
      capacity = res.capacity
    } catch (err) {
      console.log(err.message)
    }

    //check if number of added people exceeds?
    if (list_of_passengers_arr.length + req.body.length > capacity) {
      check = true;
    } else {
      //check if social_security_id exists?
      for (let i = 0; i < _list_of_passengers.length; i++) {
        if (checkSSIDExists(list_of_passengers_arr, _list_of_passengers[i].social_security_id) === true) {
          check = true;
          break;
        }
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
                payment_id: _list_of_passengers[i].payment_id
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

const cancelBooking = async (req, res, next) => {
  let list_of_passengers_arr = [];
  try {
    const res = await flightModel.findById({ _id: req.body.flight_id })
    console.log(res)
    if (!res) {
      res.status(404).send("Flight ID not found!");
    }
    console.log(res.list_of_passengers)
    list_of_passengers_arr = res.list_of_passengers;

    // for (let i = 0; i < list_of_passengers.length; i++) {
    //   if (list_of_passengers[i].payment_id === req.body.payment_id) {

    //   }
    // }
    let list_of_passengers_updated = list_of_passengers_arr.reduce((updatedArr, passenger) => {
      if (passenger.payment_id !== req.body.payment_id) {
        updatedArr.push(passenger)
      }
      return updatedArr
    }, []);
    await flightModel.findOneAndUpdate(
      {
        _id: req.body.flight_id
      },
      {
        $set: {
          list_of_passengers: list_of_passengers_updated
        }
      }
    ).exec()
    res.send("cancel booking successfully");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { flightBooking, cancelBooking };