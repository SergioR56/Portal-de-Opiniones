const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

const comentarioRoutes = require('./comentarioRoutes')
router.use(comentarioRoutes)

router.use(userRoutes);

module.exports = router;