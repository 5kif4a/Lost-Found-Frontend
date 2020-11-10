import {makeStyles} from "@material-ui/core/styles";

export const useOverlayStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: 0
    }
}))