const { getPostQuery } = require('../../database/queries');

const getPostController = (req, res) => {
  getPostQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: 'server error !' }));
};

module.exports = getPostController;
