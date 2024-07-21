// Import the mongoose library for MongoDB interaction
const mongoose = require('mongoose');
// Import the User model (assumed to be defined in the specified path)
const User = require('../models/userModel');

/**
 * Function to connect to the MongoDB database.
 * Uses mongoose to establish the connection.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB instance with the provided URI
    await mongoose.connect('mongodb://root:MTI0NjAtd2lsbHln@localhost:27017');
    
    // Alternative connection URI (commented out)
    // await mongoose.connect('mongodb://root:Mjk3NTYtd2lsbHln@localhost:127.0.0.1');

    // Log a success message if the connection is established
    console.log('MongoDB connected');
  } catch (error) {
    // Log an error message if the connection fails
    console.error('MongoDB connection error:', error);
    
    // Exit the process with a failure code
    process.exit(1);
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
