//import express from 'express';

const { userRegistration, getUser, userLogin } = require('../controllers/user.controller')
const express = require('express');


const router = express.Router();

//router.post('/register', userRegistration)

router.post('/register', userRegistration)
router.post('/login', userLogin)
// router.put('/')

router.get('/:id', getUser)

module.exports = router;