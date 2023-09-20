require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {
    notFoundController,
    errorController,
} = require('./src/controllers/errors');


const app = express();
app.use(cors());
app.use(morgan('dev'));



app.use(notFoundController);
app.use(errorController);


















app.listen(process.env.PORT, () =>{
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
})