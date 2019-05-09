const { colors } = require("@material-ui/core");
const { createMuiTheme, darken } = require("@material-ui/core/styles");

const ioTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6200EE" // purple 500
    },
    secondary: {
      main: "#03DAC5" // teal 200
    }
  }
});

const muiTheme = createMuiTheme({
  palette: {
    primary: colors.blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(colors.pink.A400, 0.08)
    }
  }
});

module.exports = {
  "material.io": ioTheme,
  "material-ui.com": muiTheme
};
