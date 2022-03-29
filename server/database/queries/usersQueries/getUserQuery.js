const connection = require('../../config/connection');

const getUserQuery = () =>
  connection.query('SELECT username,user_url_img FROM  Users;', []);

module.exports = getUserQuery;