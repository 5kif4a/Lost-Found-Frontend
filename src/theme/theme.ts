import {createMuiTheme} from '@material-ui/core/styles';

const breakpointValues = {
    xs: 425,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
};

export const theme = createMuiTheme({
    spacing: 8,
    breakpoints: {
        values: breakpointValues,
    },
});
