const { join } = require("path");

const home = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "..", "public", "index.html"));
};

module.exports = home;