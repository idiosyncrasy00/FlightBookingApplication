//import express from 'express';

const { addPayment, getPaymentsByUserId } = require('../controllers/payment.controller')
const express = require('express');


const router = express.Router();

router.post('/insert', addPayment)
router.get('/history/:id', getPaymentsByUserId)
/**
 * body
 * {
 * _id: id;
 * }
 */

module.exports = router;