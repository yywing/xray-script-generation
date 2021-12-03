/* config-overrides.js */
const { babelInclude, override, addBabelPresets } = require("customize-cra");

const path = require("path")

module.exports = override(
  babelInclude([
    path.resolve("src"), // make sure you link your own source
    path.resolve("packages/xray-script-generation-component"),
  ])
);
