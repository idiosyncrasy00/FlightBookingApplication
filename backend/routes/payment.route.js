//import express from 'express';

const { addPayment, getPaymentsByUserId, cancelPayment } = require('../controllers/payment.controller')
const express = require('express');


const router = express.Router();

router.post('/insert', addPayment)
router.get('/history', getPaymentsByUserId)
router.delete('/cancel', cancelPayment)

/**
 * body
 * {
 * _id: id;
 * }
 */

module.exports = router;