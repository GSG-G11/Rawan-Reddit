const { login, signup, home, profile } = require('./pages');
const { signupControllers, loginControllers, getUsers , logoutControllers} = require('./users');
const { addPostControllers ,getPostControllers} = require('./posts');
const {addCommentController, getCommentController, deleteCommentController} = require('./comments');

module.exports = {
  login,
  signup,
  home,
  profile,
  loginControllers,
  signupControllers,
  getUsers,
  addPostControllers,
  getPostControllers,
  addCommentController,
  getCommentController,
  deleteCommentController,
  logoutControllers
};
