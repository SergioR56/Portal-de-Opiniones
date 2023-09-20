const express = require('express');
const router = express.Router();

const { 
    newUserController, 
    loginUserController, 
} = require('../controllers/users');

// Register a new user
router.post('/users/register', newUserController);

// Login a user
router.post('/users/login', loginUserController);

module.exports = router;