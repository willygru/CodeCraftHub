const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from the request body

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // If username exists, send a 409 Conflict response
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object with the hashed password
    const newUser = new User({ username, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    // Send a 201 Created response indicating successful registration
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Send a 500 Internal Server Error response if an exception occurs
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// User login
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from the request body

    // Check if the username exists in the database
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      // If username does not exist, send a 401 Unauthorized response
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      // If password does not match, send a 401 Unauthorized response
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JSON Web Token (JWT) for the authenticated user
    const token = jwt.sign({ username: existingUser.username }, 'f728940538efe861ed8df38e0f2ee5bbf59703fe9a5c7dc3d3448311633d421a', { expiresIn: '1h' });

    // Send a 200 OK response with the generated token
    return res.status(200).json({ token });
  } catch (error) {
    // Send a 500 Internal Server Error response if an exception occurs
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// User profile management
exports.updateUserProfile = async (req, res) => {
  try {
    const { username } = req.params; // Extract username from the request parameters
    const { newUsername } = req.body; // Extract new username from the request body

    // Update the user's username in the database
    await User.updateOne({ username }, { username: newUsername });

    // Send a 200 OK response indicating successful profile update
    return res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    // Send a 500 Internal Server Error response if an exception occurs
    return res.status(500).json({ message: 'Internal server error' });
  }
};
