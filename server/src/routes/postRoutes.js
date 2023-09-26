// const express = require('express');
// const router = express.Router();



// module.exports = router;

const express = require('express');
const router = express.Router();
    

const authUserController  = require('../middlewares/authUserController');

const newPostController = require('../controllers/posts/newPostController');
const listPostsController = require('../controllers/posts/listPostsControllers');


router.post('/posts', authUserController, newPostController);

router.get('/posts', listPostsController);



router.delete(
    '/posts/:postId',
    authUserController
);


module.exports = router;

