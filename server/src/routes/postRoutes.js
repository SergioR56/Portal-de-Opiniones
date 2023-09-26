const express = require('express');
const router = express.Router();


const authUserController  = require('../middlewares/authUserController');

const {
    newPostController,
    newLikeController,
    deleteLikeController,
    listPostsController,
    newDislikeController,
    deleteDislikeController,
} = require('../controllers/posts');

//Insertar like
router.post(
    '/posts/:postId/likes',
    authUserController,
    newLikeController,
);

//Insertar Dislikes
router.post(
    '/posts/:postId/dislikes',
    authUserController,
    newDislikeController,
);

//Eliminar like
router.delete('/posts/:postId/likes', authUserController, deleteLikeController);

//eliminar dislikes
router.delete('/posts/:postId/dislikes', authUserController, deleteDislikeController);

//Listado de posts.
router.get('/posts', listPostsController);
router.post('/posts', authUserController, newPostController);

router.get('/posts', listPostsController);





module.exports = router;