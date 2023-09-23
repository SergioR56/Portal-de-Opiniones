// const express = require('express');
// const router = express.Router();



// module.exports = router;

const express = require('express');
const router = express.Router();
const {
    authUserController,
    authUserOptionalController,
    postExistsController
} = require('../middlewares/authUserController');

const {
    newPostController,
    listPostsController,
} = require('../controllers/posts');


router.post('/posts', authUserController, newPostController);

router.get('/posts', authUserOptionalController, listPostsController);



router.delete(
    '/posts/:postId',
    authUserController,
    postExistsController
);


module.exports = router;

