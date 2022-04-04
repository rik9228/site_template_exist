module.exports = (api) => {
  const prodMode = api.env("production");

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      [
        "minify",
        prodMode && {
          removeConsole: {
            exclude: ["error", "info"],
          },
        },
      ].filter(Boolean),
    ],
  };
};
