// Import the express module to create a web server
const express = require('express');

// Import the function to connect to the MongoDB database
const connectDB = require('./config/database');

// Import the user routes module
const userRoutes = require('./routes/userRoutes');

// Initialize the express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the user routes
app.use('/users', userRoutes);

// Set the port number for the server
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
