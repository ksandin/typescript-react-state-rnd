const fs = require("fs");

module.exports.getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((file) => file.name);
