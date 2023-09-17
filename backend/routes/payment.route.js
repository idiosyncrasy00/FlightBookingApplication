//import express from 'express';

const { addPayment, getPaymentsByUserId, cancelPayment } = require('../controllers/payment.controller')
const express = require('express');
const auth = require("../middlewares/auth");



const router = express.Router();

router.post('/insert', auth, addPayment)
router.get('/history/:userId', auth, getPaymentsByUserId)
router.delete('/cancel/:paymentId', auth, cancelPayment)

/**
 * body
 * {
 * _id: id;
 * }
 */

module.exports = router;