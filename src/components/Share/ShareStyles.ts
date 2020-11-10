import {makeStyles} from "@material-ui/core/styles";

export const useShareStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: 0
    },
    modal: {
        width: "90%",
        padding: "16px",
        backgroundColor: "#FFF",
        position: "relative"
    },
    close: {
        position: "absolute",
        top: 4,
        right: 4
    },
    title: {
        fontSize: "24px",
        textAlign: "center",
        marginBottom: "24px",
        fontWeight: 500
    },
    btn_block: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}))