//const usersRoute = require('./routes/user.route')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
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

//middlewares
//cookie
app.use(cookieParser());
// app.get('/cookie', function (req, res) {
//   res.cookie('flight', 'booking', { expires: new Date(Date.now() + 900000) });
//   res.send('success')
// });
//cors
app.use(cors({
  origin: "http://localhost:5173",
  exposedHeaders: ['access_token'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/users", require('./routes/user.route.js'))
app.use("/api/flights", require('./routes/flight.route.js'))
app.use("/api/utils", require('./routes/util.route.js'))
app.use("/api/payments", require('./routes/payment.route.js'))

app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server is running at port ${PORT}`)
})