const connection = require('../../config/connection');

const getUserQuery = () =>
  connection.query('SELECT id,username,user_url_img FROM  Users;', []);

module.exports = getUserQuery;