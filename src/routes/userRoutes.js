// Import the express module
const express = require('express');

// Create a new router object
const router = express.Router();

// Import the user controller module
const userController = require('../controllers/userController');

// Route to handle user registration
// Calls the registerUser method from the userController
router.post('/register', userController.registerUser);

// Route to handle user login
// Calls the loginUser method from the userController
router.post('/login', userController.loginUser);

// Route to handle updating user profile based on username
// Calls the updateUserProfile method from the userController
// ':username' is a route parameter representing the username of the user to update
router.put('/:username', userController.updateUserProfile);

// Export the router object so it can be used in other parts of the application
module.exports = router;
