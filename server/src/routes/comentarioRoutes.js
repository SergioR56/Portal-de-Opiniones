const express = require('express');
const router = express.Router();

// Importamos las funciones controladoras intermedias.
const {
    // authUserController,
    // authUserOptionalController,
    comentarioExistsController,
} = require("../middlewares/comentarioExistsController");

// Importamos las funciones controladoras finales.
const {
    newComentarioController,
    // deleteLikeController,
    // newLikeController,
    listComentarioController,
    // deleteTweetController,
} = require("../controllers/comentarios/newComentarioController");

// Insertar un tweet.
router.post('/comentarios',
// authUserController,
newComentarioController);

// Insertar un like.
router.post(
    // '/tweets/:tweetId/likes',
    // authUserController,
    comentarioExistsController,
    // newLikeController
);

// Eliminar un like.
router.delete(
    // '/tweets/:tweetId/likes',
    // authUserController,
    comentarioExistsController,
    // deleteLikeController
);

// Seleccionar todos los tweets (con posibilidad de filtrar por palabra clave).
router.get('/comentarios',
//  authUserOptionalController,
  listComentarioController);

// Eliminar un tweet.
router.delete(
    '/comentarios/:comentariotId',
    // authUserController,
    comentarioExistsController,
    // deleteTweetController
);

module.exports = router;

