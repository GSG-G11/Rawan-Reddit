const express = require('express');

const middleware = require('../middleware/middleware');

const {
  login,
  signup,
  profile,
  home,
  signupControllers,
  loginControllers,
  getUsers,
  addPostControllers,
  getPostControllers,
  addCommentController,
  getCommentController,
  deleteCommentController,
  logoutControllers,
  getProfileController,
} = require('../controllers/');

const router = express.Router();

router.post('/api/v1/login', loginControllers);
router.post('/api/v1/signup', signupControllers);

router.post('/post', middleware, addPostControllers);
router.get('/post', getPostControllers);

router.get('/users', getUsers);

router.post('/posts/:id/comments', middleware, addCommentController);
router.get('/posts/comments', getCommentController);
router.delete('/delete/:id', deleteCommentController);

router.get('/profile/:id/show', getProfileController);

//pages router
router.get('/', home);
router.get('/profile', profile);
router.get('/login', login);
router.get('/signup', signup);
router.get('/logout', logoutControllers);
module.exports = router;
