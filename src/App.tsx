import React, { FC } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import { Routes } from "./routes";
import { SnackbarProvider } from "notistack";

const App: FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate maxSnack={3}>
        <CssBaseline />
        <Routes />
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

export default App;
