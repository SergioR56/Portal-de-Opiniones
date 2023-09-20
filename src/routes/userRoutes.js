const express = require('express');
const router = express.Router();

const { newUserController } = require('../controllers/users');

router.post('/users/register', newUserController);

module.exports = router;