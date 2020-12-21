const path = require("path");
const without = require("lodash.without");
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
        // Restricts shared application code from depending on client/api
        restrictDependencies(`apps/${appName}/shared/**`, ["api", "client"]),
        // Restricts shared api code from depending on api implementations
        restrictDependencies(
          `apps/${appName}/api/shared/**`,
          without(
            getDirectories(path.resolve(__dirname, "apps", appName, "api")),
            "shared"
          )
        ),
      ],
      []
    ),
  ],
};
