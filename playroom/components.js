const babel = require("@babel/core");
const components = require("@material-ui/core");
const MenuIcon = require("@material-ui/icons/Menu").default;

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
});
const demos = require("./demos");

module.exports = {
  ...components,
  ...demos,
  MenuIcon
};
