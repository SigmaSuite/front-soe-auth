const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Sigma",
    projectName: "SoeAuth",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
