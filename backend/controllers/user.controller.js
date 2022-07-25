//import express from 'express'
//import User from '../models/user.model.js'
//import jwt from "jsonwebtoken";
const userModel = require('../models/user.model.js');
const hashedPassword = require('../utils/hashingPassword')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//register an user
const userRegistration = async (req, res, next) => {
  //first check if user is exist?
  //let user = User.findOne({ email: req.body.email })
  console.log(`The email is ${req.body.email}`);
  let user = userModel.findOne({ email: req.body.email })
  if (!user) {
    res.status(400).send("Username, email or phone number already exists!")
  } else {
    //need to hash the password
    const newUser = new userModel({
      username: req.body.username,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      isAdmin: false
    })
    try {
      user = newUser;
      user.password = await hashedPassword(user.password)
      await user.save();
      res.send(user)
    } catch (err) {
      console.log(err.message)
    }
  }
}

const userLogin = async (req, res, next) => {
  //res.send("Login api");
  try {
    const user = await userModel.findOne({ username: req.body.username })
    if (!user) return res.status(404).send("User not found!!!");
    //compare password
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!passwordCheck) return res.status(400).send("Wrong username or password.");

    const { password, isAdmin, ...otherDetails } = user._doc;
    //res.status(200).json({ ...otherDetails });

    const token = jwt.sign({
      id: user._id, isAdmin: user.isAdmin
    }, process.env.JWT)


    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
}

const userUpdate = async (req, res, next) => {
  res.send("Update user api");
}

//for testing
const getUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

//login an user

//update an user (later)

//delete an user (later)

module.exports = { userRegistration, getUser, userLogin, userUpdate }


