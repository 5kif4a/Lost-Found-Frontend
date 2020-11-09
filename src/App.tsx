import React, {FC} from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";


const App: FC = () => {
    return (
        <MuiThemeProvider theme={theme}>

        </MuiThemeProvider>
    );
}

export default App;
