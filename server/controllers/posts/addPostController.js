const { addPostQuery } = require('../../database/queries');

const addPostController = (req, res) => {
  const idUser = req.id;
  const userIdFinal = idUser.id;
  const { title, description } = req.body;
  addPostQuery(title, description, userIdFinal)
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.status(500).json({
        message: 'INTERNAL SERVER ERROR',
      });
    });
};

module.exports = addPostController;
