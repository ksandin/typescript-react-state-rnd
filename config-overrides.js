const path = require("path");

module.exports = {
  paths: function (paths) {
    paths.appSrc = path.resolve(__dirname, "src");
    paths.appIndexJs = path.resolve(paths.appSrc, "clientIndex.tsx");
    return paths;
  },
};
