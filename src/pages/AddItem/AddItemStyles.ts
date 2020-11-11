import {makeStyles} from "@material-ui/core/styles";

export const useAddItemStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    media: {
        backgroundColor: "#B3B3B3",
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        margin: "8px 0"
    },
    form: {
        margin: "8px"
    },
    element: {
        margin: "8px 0"
    },
    media__input: {
        display: "none"
    },
    btn: {
        textAlign: "center"
    }
}))