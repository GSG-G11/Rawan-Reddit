const connection = require('../../config/connection');

const addPostQuery = (title, description, user_id) =>
  connection.query(
    'INSERT INTO Posts(title, description, user_id) VALUES ($1, $2, $3) returning *;',
    [title, description, user_id]
  );

module.exports = addPostQuery;