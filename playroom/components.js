const babel = require("@babel/core");
const glob = require("glob");
const path = require("path");
const components = require("@material-ui/core");
const MenuIcon = require("@material-ui/icons/Menu").default;

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
});
// poor mans require.context
const demoDirectory = path.join(
  __dirname,
  "../material-ui/docs/src/pages/components/app-bar"
);
const demos = Object.fromEntries(
  glob.sync(path.join(demoDirectory, "**/*.js")).map(demoFilename => {
    return [path.basename(demoFilename, ".js"), require(demoFilename).default];
  })
);

module.exports = {
  ...components,
  ...demos,
  MenuIcon
};
