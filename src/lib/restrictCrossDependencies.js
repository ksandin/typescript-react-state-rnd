const restrictCrossDependencies = (folder, subFolders) =>
  subFolders.map((subFolderName) => {
    const others = new Set(subFolders);
    others.delete(subFolderName);
    return restrictDependencies(
      `${folder}/${subFolderName}`,
      Array.from(others)
    );
  });

const restrictDependencies = (folder, dependencies) => ({
  files: [`${folder}/**`],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: dependencies.map((dependency) => `**/${dependency}/**`),
      },
    ],
  },
});

module.exports = {
  restrictCrossDependencies,
  restrictDependencies,
};
