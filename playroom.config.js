const ReactIs = require("react-is");
const { default: parsePropTypes } = require("parse-prop-types");
const PacktrackerPlugin = require("@packtracker/webpack-plugin");

module.exports = {
  title: "Material-UI",
  outputPath: "./dist/playroom",
  components: "./playroom/components.js",
  themes: "./playroom/themes.js",
  frameComponent: "./playroom/FrameComponent.js",
  widths: [320, 375, 768, 1024],
  getStaticTypes(playroomConfig) {
    const components = require(playroomConfig.components);

    return Object.fromEntries(
      Object.entries(components).map(([name, maybeElementType]) => {
        let props = maybeElementType;

        const isWithStylesDecorated =
          ReactIs.isValidElementType(maybeElementType) &&
          maybeElementType.Naked;

        if (isWithStylesDecorated) {
          props = parsePropTypes(maybeElementType.Naked);
        }

        return [name, props];
      })
    );
  },
  webpackConfig: playroomConfig => {
    const plugins = [];
    if (process.env.PT_PROJECT_TOKEN) {
      plugins.push(
        new PacktrackerPlugin({
          upload: true,
          fail_build: true,
          // provided by netlify
          project_token: process.env.PT_PROJECT_TOKEN,
          branch: process.env.BRANCH
        })
      );
    }

    return {
      devtool: "cheap-source-map",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: require.resolve("babel-loader"),
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                // need this for hot reloading the demo source
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          }
        ]
      },
      node: {
        fs: "empty"
      },
      plugins,
      resolve: {
        alias: {
          react: require.resolve("react"),
          "react-dom": require.resolve("react-dom")
        }
      }
    };
  },
  exampleCode: `
<DemoPrimarySearchAppBar />
<Typography variant="h4">Material-UI Playroom</Typography>
<List>
  <ListItem>components are not prefixed</ListItem>
  <ListItem>Demos (composite components) are prefixed with 'Demo'</ListItem>
  <ListItem>Some icons are included and prefixed with 'Icon'</ListItem>
</List>
<DemoBottomAppBar />
  `
};
