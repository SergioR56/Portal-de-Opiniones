const express = require('express');
const router = express.Router();

// Controllers
const {authUserController} = require('../middlewares');

const {
    newUserController,
    loginUserController,
    editUserController,
    getUserController,
} = require('../controllers/users');

//Registro de usuario
router.post('/users/register', newUserController);

//Login de usuario
router.post('/users/login', loginUserController);

//Editar nombre de usuario
router.put('/users/update', authUserController, editUserController);

//Información de usuario
router.get('/users', authUserController, getUserController);

module.exports = router;
