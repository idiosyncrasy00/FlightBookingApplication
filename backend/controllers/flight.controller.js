const flightModel = require('../models/flight.model.js');
//register an user
const addFlight = async (req, res, next) => {
  const newFlight = new flightModel({
    brand: req.body.brand,
    destination: req.body.destination,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime,
    price: req.body.price,
    //to check the number of booked flights
    capacity: req.body.capacity,
  })
  try {
    let flight = newFlight;
    await flight.save();
    res.send(flight);
  } catch (err) {
    console.log(err.message)
  }
}

const updateFlight = async (req, res, next) => {

}

//for testing
const deleteFlight = async (req, res, next) => {

}

const queryFlight = async (req, res, next) => {
  const query = {
    brand: (req.body.brand) ? req.body.brand : /.*/,
    destination: req.body.destination ? req.body.destination : /.*/,
    arrivalTime: req.body.arrivalTime ? req.body.arrivalTime : /.*/,
    departureTime: req.body.departureTime ? req.body.departureTime : /.*/,
    price: req.body.price ? req.body.brand : { $gt: 0 },
    capacity: req.body.capacity ? req.body.brand : { $gt: 0 },
  }
  try {
    let results = await flightModel.find(query);
    const arr = Object.entries(results);
    if (arr.length === 0) {
      res.send({ message: "No results found!" })
    } else {
      res.send(arr);
    }
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { addFlight, updateFlight, deleteFlight, queryFlight }


