const loginControllers = require('./login.controllers');
const signupControllers = require('./signup.controllers');
const logoutControllers = require('./logout.controllers');

const getUsers = require('./getUsers')

module.exports = {
   loginControllers,
   signupControllers,
   getUsers,
   logoutControllers
}
