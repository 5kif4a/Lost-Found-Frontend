import React, {FC} from "react";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";
import {Routes} from "./routes";
import {Header} from "./components/Header/Header";

const App: FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Routes/>
        </MuiThemeProvider>
    );
};

export default App;
