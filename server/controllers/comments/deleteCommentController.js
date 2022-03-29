/* eslint-disable no-unused-vars */
const {deleteCommentQuery} =require('../../database/queries')
const deleteCommentController = (req, res) => {
  deleteCommentQuery(req.params.id);
};
module.exports = deleteCommentController;
