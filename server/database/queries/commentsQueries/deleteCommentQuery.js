const connection = require('../../config/connection');

const deleteCommentQuery = (id) =>
  connection.query(
    'DELETE FROM Comments WHERE id=$1 ;',
    [id]
  );

module.exports = deleteCommentQuery;