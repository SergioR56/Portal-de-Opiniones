const express = require('express');
const router = express.Router();

// Importamos las funciones controladoras intermedias.
const {
    // authUserController,
    // authUserOptionalController,
    postExistsController,
} = require("../middlewares/postExistsController");

// Importamos las funciones controladoras finales.
const {
    newPostController,
    // deleteLikeController,
    // newLikeController,
    listPostController,
    // deletePostController,
} = require("../controllers/posts/newPostController");

// Insertar un Post.
router.post('/posts',
// authUserController,
newPostController);

// Insertar un like.
router.post(
    // '/Posts/:PostId/likes',
    // authUserController,
    postExistsController,
    // newLikeController
);

// Eliminar un like.
router.delete(
    // '/Posts/:PostId/likes',
    // authUserController,
    postExistsController,
    // deleteLikeController
);

// Seleccionar todos los Posts (con posibilidad de filtrar por palabra clave).
router.get('/posts',
//  authUserOptionalController,
  listPostController);

// Eliminar un Post.
router.delete(
    '/posts/:postId',
    // authUserController,
    postExistsController,
    // deletePostController
);

module.exports = router;

