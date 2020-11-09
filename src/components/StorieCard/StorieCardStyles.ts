import {makeStyles} from "@material-ui/core/styles";

export const useStorieCardStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "16px"
    },
    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        border: "2px solid #0008C4",
    },
    title: {
        marginTop: "8px",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 500,
    }
}))