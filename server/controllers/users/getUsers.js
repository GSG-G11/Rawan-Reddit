const { getUserQuery } = require('../../database/queries');

const getUsers = (req, res) => {
  getUserQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: 'server error !' }));
};

module.exports = getUsers;
