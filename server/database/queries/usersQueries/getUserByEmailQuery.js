const connection = require('../../config/connection');

const getUserByEmailQuery = (email) =>
  connection.query('SELECT * FROM  Users WHERE email = $1;', [email]);

module.exports = getUserByEmailQuery;
