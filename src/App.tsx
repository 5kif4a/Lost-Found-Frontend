import React, {FC} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";
import {Routes} from "./routes";
import {Header} from "./components/Header/Header";

const App: FC = () => {
    return (

        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
