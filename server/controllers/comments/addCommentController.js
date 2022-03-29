const { addCommentQuery } = require('../../database/queries');

const addCommentController = (req, res) => {
  const idUser = req.id;
  const userIdFinal = idUser.id;
  const { id: postId } = req.params;
  const { description } = req.body;
  addCommentQuery(postId, description, userIdFinal)
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.status(500).json({
        message: 'INTERNAL SERVER ERROR',
      });
    });
};

module.exports = addCommentController;
