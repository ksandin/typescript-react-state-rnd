module.exports.restrictCrossDependencies = (folder, subFolders) =>
  subFolders.map((appName) => {
    const others = new Set(subFolders);
    others.delete(appName);
    return {
      files: [`${folder}/${appName}/**`],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: Array.from(others).map((other) => `**/${other}/**`),
          },
        ],
      },
    };
  });
