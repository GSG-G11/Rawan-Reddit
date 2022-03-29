const connection = require('../../config/connection');

const postUserQuery = (username, email, password, userUrlImg) =>
  connection.query(
    'INSERT INTO Users(username, email, password, user_url_img) VALUES ($1, $2, $3, $4) returning *;',
    [username, email, password, userUrlImg]
  );

module.exports = postUserQuery;
