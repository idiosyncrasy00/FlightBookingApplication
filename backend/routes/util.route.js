const { flightBooking, cancelBooking } = require('../controllers/util.controller')
const express = require('express');
const auth = require("../middlewares/auth");

const router = express.Router();

router.put('/booked', auth, flightBooking)
router.put('/cancel', auth, cancelBooking)

router.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;