require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');


const routes = require('./src/routes');

const bodyParser = require('body-parser'); 
const {
    notFoundController,
    errorController,
} = require('./src/controllers/errors');



const { check, validationResult } = require('express-validator'); 

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenido a la web de reseñas');
});

app.post('/users', [

  check('mail').isEmail().normalizeEmail(),
  check('contraseña').isLength({ min: 6 }),
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  res.json({ message: 'Usuario creado' });
});

app.post('/reseñas', [


  check('texto').notEmpty(),
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.httpStatus || 500).json({
    status: 'error',
    message: err.message,
  });
});

















app.listen(process.env.PORT, () =>{
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
})