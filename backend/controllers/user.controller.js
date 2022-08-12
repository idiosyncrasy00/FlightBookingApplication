const userModel = require('../models/user.model.js');
const hashedPassword = require('../utils/hashingPassword')
const jwtSigning = require('../utils/tokenSigning.util')
const bcrypt = require('bcrypt');
const validation = require('../validations/user.validation');
//const jwt = require('jsonwebtoken');

//register an user
const userRegistration = async (req, res, next) => {
  //first check if user is exist?
  //let user = User.findOne({ email: req.body.email })
  console.log(`The email is ${req.body.email}`);
  const { error, value } = await validation.registerSchema.validate(req.body);
  if (error) {
    res.status(403).send({ error: error.message });
  } else {
    let user = userModel.findOne({ email: req.body.email })
    console.log(value)
    if (!user) {
      res.status(400).send("Username, email or phone number already exists!")
    } else {
      //need to hash the password
      const newUser = new userModel(value)
      //const newUser = value
      try {
        user = newUser;
        user.password = await hashedPassword(user.password)
        await user.save();
        res.status(200).json("User registered successfully!");
        next()
      } catch (err) {
        console.log(err.message)
      }
    }
  }
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
    const token = jwtSigning(user);
    // const token = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   process.env.JWT
    // );

    res
      .cookie("access_token", token, {
        //httpOnly: true,
        expires: new Date(Date.now() + 900000),
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
    next();
  } catch (error) {
    next(error);
  }
}

const userUpdate = async (req, res, next) => {
  const { error, value } = await validation.editSchema.validate(req.body);
  if (error) {
    res.status(403).send({ error: error.message });
  } else {
    try {
      // const updatedUser = {
      //   // firstname: req.body.firstname,
      //   // lastname: req.body.lastname,
      //   username: req.body.username,
      //   phoneNumber: req.body.phoneNumber,
      //   email: req.body.email,
      // }
      const updatedUser = value;
      await userModel.findOneAndUpdate(
        { _id: req.body._id },
        updatedUser
      ).exec()
      res.status(200).send(updatedUser);
    } catch (error) {
      console.log(error.message);
    }
  }
}

//delete an user (later)

//post users' payments
const postUserPayments = async (req, res, next) => {
  res.send("Users' payments POST api");
}

//get users' payments
const getUserPayments = async (req, res, next) => {
  res.send("Users' payments GET api");
}

module.exports = { userRegistration, getUser, userLogin, userUpdate, postUserPayments, getUserPayments }


