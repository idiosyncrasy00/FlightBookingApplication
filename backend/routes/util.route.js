const { flightBooking, cancelBooking } = require('../controllers/util.controller')
const express = require('express');

const router = express.Router();

router.put('/booked', flightBooking)
router.put('/cancel', cancelBooking)

module.exports = router;