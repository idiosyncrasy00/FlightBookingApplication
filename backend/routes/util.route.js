const { flightBooking } = require('../controllers/util.controller')
const express = require('express');

const router = express.Router();

router.put('/booked', flightBooking)

module.exports = router;