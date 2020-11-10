import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
    },
    brand: {
        marginBottom: "24px"
    },
    root: {
        marginBottom: "24px",
    },
});

export {useStyles}