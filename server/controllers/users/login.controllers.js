const { compare } = require('bcryptjs');
const { getUserByEmailQuery } = require('../../database/queries');
const { loginSchema, signToken } = require('../../utils');
const customError = require('../errors/customError');
let userId = '';

const postlogin = (req, res, next) => {
  const { password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then((value) => getUserByEmailQuery(value.email))
    .then((data) => {
      if (data.rowCount) {
        userId = data.rows[0].id;
        return compare(password, data.rows[0].password);
      }
    })
    .then((value) => {
      if (value === true) {
        return signToken({ id: userId });
      } else {
        throw customError(
          "You do not have account ,please Sign Up",
          400
        );
      }
    })
    .then((token) => {
      res
        .cookie('id', token)
        .redirect('/')
        .json("login");
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.json({ massage: err });
      } else {
        next(err);
      }
    });
};

module.exports = postlogin;
