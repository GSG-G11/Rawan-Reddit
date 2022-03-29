const { join } = require("path");

const login = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "..", "public", "HTML", "login.html"));
};

module.exports = login;