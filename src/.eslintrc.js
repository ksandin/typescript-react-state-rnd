const path = require("path");
const { getDirectories } = require("./lib/getDirectories");
const {
  restrictCrossDependencies,
  restrictDependencies,
} = require("./lib/restrictCrossDependencies");

const appFolder = path.resolve(__dirname, "apps");
const appNames = getDirectories(appFolder);

module.exports = {
  plugins: ["import"],
  rules: { "import/order": ["error"] },
  overrides: [
    // Restricts dependencies between apps
    ...restrictCrossDependencies("apps", appNames),
    // Restricts dependencies between client/api in each app
    ...appNames.reduce(
      (overrides, appName) => [
        ...overrides,
        ...restrictCrossDependencies(`apps/${appName}`, ["api", "client"]),
        // Restricts shared from importing from client/api
        restrictDependencies(`apps/${appName}/shared/**`, ["api", "client"]),
      ],
      []
    ),
  ],
};
