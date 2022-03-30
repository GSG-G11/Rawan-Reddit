const connection = require('../../config/connection');

const getUserByIdQuery = (id) =>
  connection.query('SELECT username,user_url_img,email FROM  Users WHERE id = $1;', [id]);

module.exports = getUserByIdQuery;
