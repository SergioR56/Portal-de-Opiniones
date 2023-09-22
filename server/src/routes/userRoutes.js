const express = require('express');
const router = express.Router();

const {
    newUserController,
    loginUserController,
} = require('../controllers/users');

//Registro de usuario
router.post('/users/register', newUserController);

// Login de usuario
router.post('/users/login', loginUserController);

module.exports = router;
