const { signToken, verifyToken } = require('./promiseToken');
const { loginSchema, signupSchema } = require('./validation');

module.exports = {
  signToken,
  verifyToken,
  loginSchema,
  signupSchema
};
