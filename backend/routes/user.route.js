//import express from 'express';

const { userRegistration, getUser, userLogin, postUserPayments, userUpdate } = require('../controllers/user.controller')
const express = require('express');
const auth = require("../middlewares/auth");



const router = express.Router();

//router.post('/register', userRegistration)

router.post('/register', userRegistration)
router.post('/login', userLogin)
router.put('/update', auth, userUpdate)
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