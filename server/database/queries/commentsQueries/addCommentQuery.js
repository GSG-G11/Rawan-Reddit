const connection = require('../../config/connection');

const addCommentQuery = (post_id, description, user_id) =>
  connection.query(
    'INSERT INTO Comments(post_id, description, user_id) VALUES ($1, $2, $3) returning *;',
    [post_id, description, user_id]
  );

module.exports = addCommentQuery;