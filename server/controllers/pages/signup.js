const { join } = require("path");

const signup = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "..", "public", "HTML", "signup.html"));
};

module.exports = signup;