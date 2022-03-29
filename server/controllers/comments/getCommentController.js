const { getCommentQuery } = require('../../database/queries');

const getCommentController = (req, res) => {
  getCommentQuery()
    .then((data) => {
        // console.log(res.json(data.rows));
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: 'server error !' }));
};

module.exports = getCommentController;