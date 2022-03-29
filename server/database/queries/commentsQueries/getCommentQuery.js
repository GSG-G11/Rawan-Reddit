const connection = require('../../config/connection');

const getCommentQuery = () =>
  connection.query(
    `SELECT c.id,
    c.description,
    c.post_id,
    u.username
    FROM Comments c
    JOIN Users u
    ON c.user_id= u.id;`,
    []
  );

module.exports = getCommentQuery;