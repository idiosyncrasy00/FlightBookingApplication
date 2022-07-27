//import express from 'express';

const { userRegistration, getUser, userLogin, postUserPayments } = require('../controllers/user.controller')
const express = require('express');


const router = express.Router();

//router.post('/register', userRegistration)

router.post('/register', userRegistration)
router.post('/login', userLogin)
/**
 * body
 * {
 * _id: id;
 * }
 */
router.post('/payment', postUserPayments)
// router.put('/')

router.get('/:id', getUser)

module.exports = router;