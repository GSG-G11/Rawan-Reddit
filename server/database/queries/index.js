const {
  getUserQuery,
  postUserQuery,
  getUserByEmailQuery,
} = require('./usersQueries');
const { addPostQuery, getPostQuery } = require('./postsQueries');
const {
  addCommentQuery,
  getCommentQuery,
  deleteCommentQuery,
} = require('./commentsQueries');
const { getProfileQuery, getUserByIdQuery } = require('./profileQueries');

module.exports = {
  getUserQuery,
  postUserQuery,
  getUserByEmailQuery,
  addPostQuery,
  getPostQuery,
  addCommentQuery,
  getCommentQuery,
  deleteCommentQuery,
  getProfileQuery,
  getUserByIdQuery,
};
