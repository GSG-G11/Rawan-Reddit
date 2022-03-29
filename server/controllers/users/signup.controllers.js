const { hash } = require('bcryptjs');
const {
  postUserQuery,
  getUserByEmailQuery,
} = require('../../database/queries');
const customError = require('../errors/customError');
const { signupSchema, signToken } = require('../../utils');

const postSignUp = (req, res, next) => {
  const { username, email, password, userUrlImg } = req.body;
  signupSchema
    .validateAsync(req.body)
    .then(() => getUserByEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw customError('Email is used', 401);
      } else {
        return hash(password, 8);
      }
    })
    .then((hashPassword) =>
      postUserQuery(username, email, hashPassword, userUrlImg)
    )
    .then(({ rows }) => signToken({ id: rows[0].id }))
    .then((token) => {
      res.cookie('id', token).redirect('/')
      .json('register')
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.json({ massage: err });
      } else {
        next(err);
      }
    });
};

module.exports = postSignUp;
