const { join } = require("path");

const profile = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "..", "public", "HTML", "profile.html"));
};

module.exports = profile;