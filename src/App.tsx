import React, {FC} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";
import {Routes} from "./routes";
import {Header} from "./components/Header/Header";
import {SnackbarProvider} from "notistack";

const App: FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <SnackbarProvider preventDuplicate maxSnack={3}>
                <CssBaseline/>
                <Router>
                    <Header/>
                    <Routes/>
                </Router>
            </SnackbarProvider>
        </MuiThemeProvider>
    );
};

export default App;
