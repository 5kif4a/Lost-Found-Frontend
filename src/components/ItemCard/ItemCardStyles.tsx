import {makeStyles} from "@material-ui/core/styles";

export const useItemCardStyles = makeStyles((theme) => ({
    root: {
        width: "160px",
        height: "160px",
        position: "relative"
    },
    title: {
        display: "flex",
        alignItems: "center",
        height: "32px",
        width: "100%",
        bottom: 0,
        background: "rgba(196, 196, 196, 0.7)",
        position: "absolute",
        fontSize: "12px",
        lineHeight: "16px",
        paddingLeft: "8px"
    }

}))