require('env2')('.env');
const { verify } = require('jsonwebtoken');

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.privateKey, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

module.exports = verifyToken;
