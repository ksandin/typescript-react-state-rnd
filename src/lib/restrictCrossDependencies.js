module.exports.restrictCrossDependencies = (folder, subFolders) =>
  subFolders.map((subFolderName) => {
    const others = new Set(subFolders);
    others.delete(subFolderName);
    return {
      files: [`${folder}/${subFolderName}/**`],
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
