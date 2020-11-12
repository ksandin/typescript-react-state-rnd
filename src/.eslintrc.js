const path = require("path");
const { getDirectories } = require("./lib/getDirectories");
const {
  restrictCrossDependencies,
} = require("./lib/restrictCrossDependencies");

const appFolder = path.resolve(__dirname, "apps");
const appNames = getDirectories(appFolder);

module.exports = {
  overrides: restrictCrossDependencies("apps", appNames),
};
