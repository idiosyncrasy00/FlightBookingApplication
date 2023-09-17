//import express from 'express';

const { addFlight, updateFlight, deleteFlight, queryFlight } = require('../controllers/flight.controller')
const express = require('express');
const auth = require("../middlewares/auth");


const router = express.Router();

router.post('/create', auth, addFlight)
router.put('/update', auth, updateFlight)
router.delete('/delete', auth, deleteFlight)
router.post('/query', auth, queryFlight)

module.exports = router;