const flightModel = require('../models/flight.model.js');
//register an user
const addFlight = async (req, res, next) => {
  const newFlight = new flightModel({
    brand: req.body.brand,
    from: req.body.from,
    to: req.body.to,
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
  // try {
  //   const updatedFlight = {
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     username: req.body.username,
  //     phoneNumber: req.body.phoneNumber,
  //     email: req.body.email,
  //   }
  //   await flightModel.findOneAndUpdate(
  //     { _id: req.body._id },
  //     updatedFlight
  //   ).exec()
  //   res.status(200).send(updatedFlight);
  // } catch (error) {
  //   console.log(error.message);
  // }
}

//for testing
const deleteFlight = async (req, res, next) => {

}

const queryFlight = async (req, res, next) => {
  const query = {
    brand: (req.body.brand) ? req.body.brand : /.*/,
    from: req.body.from ? req.body.from : /.*/,
    to: req.body.to ? req.body.to : /.*/,
    arrivalTime: req.body.arrivalTime ? req.body.arrivalTime : /.*/,
    departureTime: req.body.departureTime ? req.body.departureTime : /.*/,
    arrivalDate: req.body.arrivalDate ? req.body.arrivalDate : /.*/,
    departureDate: req.body.departureDate ? req.body.departureDate : /.*/,
    // price: req.body.price ? req.body.price : { $gt: 0 },
    // capacity: req.body.capacity ? req.body.capacity : { $gt: 0 },
  }
  try {
    let results = await flightModel.find(query);
    const arr = Object.entries(results);
    if (arr.length === 0) {
      res.send({ message: "No results found!" })
    } else {
      let formattedResults = []
      for (let i = 0; i < arr.length; i++) {
        formattedResults.push({
          id: arr[i][1]._id,
          image: arr[i][1].image,
          brand: arr[i][1].brand,
          from: arr[i][1].from,
          to: arr[i][1].to,
          arrivalTime: arr[i][1].arrivalTime,
          departureTime: arr[i][1].departureTime,
          arrivalDate: arr[i][1].arrivalDate,
          departureDate: arr[i][1].departureDate,
          price: arr[i][1].price,
          capacity: arr[i][1].capacity,
        })
      }
      //res.send(arr);
      res.send(formattedResults);
    }
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { addFlight, updateFlight, deleteFlight, queryFlight }


