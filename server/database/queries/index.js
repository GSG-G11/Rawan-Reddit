const {getUserQuery,postUserQuery, getUserByEmailQuery} = require('./usersQueries');
const {addPostQuery,getPostQuery} =require('./postsQueries')
const {addCommentQuery,getCommentQuery} =require('./commentsQueries')

module.exports = {
    getUserQuery,
    postUserQuery,
    getUserByEmailQuery,
    addPostQuery,
    getPostQuery,
    addCommentQuery,
    getCommentQuery
}