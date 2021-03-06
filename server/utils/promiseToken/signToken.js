require('env2')('.env');
const { sign } = require('jsonwebtoken');

const signToken = (data) => {
  return new Promise((resolve, reject) => {
    sign(data, process.env.privateKey, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

module.exports = signToken;
