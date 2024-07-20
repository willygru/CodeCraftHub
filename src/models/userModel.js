// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for a User model
// A schema in Mongoose defines the structure of the documents within a collection
const userSchema = new mongoose.Schema({
  // The username field is a string, must be unique and is required
  username: {
    type: String,      // Specifies the data type for the field
    required: true,    // Indicates that this field is mandatory
    unique: true,      // Ensures that each username must be unique across the collection
  },
  // The password field is also a string and is required
  password: {
    type: String,      // Specifies the data type for the field
    required: true,    // Indicates that this field is mandatory
  },
});

// Create a User model using the schema defined above
// A model in Mongoose is a wrapper for the schema that provides methods to interact with the database
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other parts of the application
module.exports = User;
