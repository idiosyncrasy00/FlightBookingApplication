const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const url = process.env.DATABASE_URL;

const mongodbConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
}
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.on('connected', () => {
  console.log("Database connected")
})

database.on('disconnected', () => {
  console.log("Database disconnected")
})



app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server is running at port ${PORT}`)
})