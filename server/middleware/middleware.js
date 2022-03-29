// const { verifyToken } = require('../utils/promiseToken');

// const middleware = (req, res, next) => {
//   const cookie = req.cookies;
//   const id = cookie.id;
//   console.log(id);
//   if (!id) return res.status(302).redirect('/');
//   return verifyToken(id)
    // .then(() => {
    //   req.id = id;
    //   next();
    // })
    // .catch((err) => {
    //   res.clearCookie('id');
    //   res.redirect('/');
    //   next(err);
    // });
// };

// module.exports = middleware;

const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
    const { id } = req.cookies;
    if (id) {
      jwt.verify(id, process.env.privateKey, (err, id) => {
        if (err) {
          res.clearCookie('id');
          res.redirect('/');
        }else{
          req.id = id;
          next();
        }
      });
    }
    else {
      res.redirect('/');
    }
  };
  module.exports=middleware;
