import React, { FC } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import { Routes } from "./routes";

const App: FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  );
};

export default App;
