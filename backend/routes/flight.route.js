//import express from 'express';

const { addFlight, updateFlight, deleteFlight, queryFlight } = require('../controllers/flight.controller')
const express = require('express');

const router = express.Router();

router.post('/create', addFlight)
router.put('/update', updateFlight)
router.delete('/delete', deleteFlight)
router.post('/query', queryFlight)

module.exports = router;