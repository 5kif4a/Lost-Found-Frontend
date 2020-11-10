import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
    },
    root: {
        marginBottom: "25px",
    },
});

export {useStyles}