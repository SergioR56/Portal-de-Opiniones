require('dotenv').config();

const express = require('express');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la web de reseñas');
});

app.post('/users'),
    [
        check('email').isEmail().normalizeEmail(),
        check('contraseña').isLength({ min: 6 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(422).json({ errors: errors.array() });
        }

        res.json({ message: 'Usuario creado' });
    };

app.post('/reseñas'),
    [check('texto').notEmpty()],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty) {
            return res.status(422).json({ errors: errors.array() });
        }
    };



// Middleware de manejo de errores 404
app.use(notFoundController);

// Manejador de errores global
app.use(errorController);



app.listen(process.env.PORT, () => {
    console.log(`Server is running at https://localhost:${process.env.PORT}`);
});
