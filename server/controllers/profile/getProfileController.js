const { getProfileQuery , getUserByIdQuery} = require('../../database/queries');

const getProfileController = (req, res) => {
    const { id: userId } = req.params;
  //   const idUser = req.id;
  // const userIdFinal = idUser.id;
    const getuser = getUserByIdQuery(userId);
    const postQuery = getProfileQuery(userId);
    Promise.all([getuser, postQuery])
      .then((values) => {
        res.json([values[0].rows, values[1].rows]);
      })
    .catch(() => res.status(500).json({ message: 'server error !' }));
};

module.exports = getProfileController;