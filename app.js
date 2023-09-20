require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');
const app = express();


// Middleware for routes behind the other routes defined
app.use(routes);


















app.listen(process.env.PORT, () =>{
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
})