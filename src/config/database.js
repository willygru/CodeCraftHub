const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    //await mongoose.connect('mongodb://root:Mjk3NTYtd2lsbHln@localhost:27017');
    await mongoose.connect('mongodb://root:Mjk3NTYtd2lsbHln@localhost:127.0.0.1');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;