import {makeStyles} from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "54px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #B3B3B3",
        padding: "0 8px"
    },
    brand: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 700
    }
}))