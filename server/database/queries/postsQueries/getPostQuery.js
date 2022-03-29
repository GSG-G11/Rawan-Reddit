const connection = require('../../config/connection');

const getPostQuery = () =>
  connection.query(
    `SELECT p.id,
    p.title,
    p.description,
    u.username,
    u.user_url_img 
    FROM Posts p 
    JOIN Users u
    ON p.user_id= u.id;`,
    []
  );

module.exports = getPostQuery;
