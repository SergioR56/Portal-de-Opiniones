require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(fileUpload());

app.use(cors());














app.listen(process.env.PORT, () =>{
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
})