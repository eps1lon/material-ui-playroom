import React from "react";
import { ThemeProvider } from "@material-ui/styles";

export default function Frame(props) {
  const { children, theme } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
