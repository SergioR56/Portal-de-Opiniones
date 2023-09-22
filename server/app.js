/* eslint-disable no-unused-vars */
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./src/routes');

const {
    errorController,
    notFoundController,
    } = require('./src/controllers/errors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);










// Middleware de manejo de errores 404
app.use(notFoundController);

// Manejador de errores global
app.use(errorController);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
});
