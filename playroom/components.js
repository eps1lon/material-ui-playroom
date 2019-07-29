const babel = require("@babel/core");
const coreComponents = require("@material-ui/core");
const labComponents = require("@material-ui/lab");
const IconMenu = require("@material-ui/icons/Menu").default;

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
});
const demos = require("./demos");

module.exports = {
  ...coreComponents,
  ...labComponents,
  ...demos,
  IconMenu
};
