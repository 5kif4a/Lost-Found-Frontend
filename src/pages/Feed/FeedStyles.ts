import {makeStyles} from "@material-ui/core/styles";

export const useFeedStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    stories: {
        height: "128px",
        display: "flex",
        alignItems: "center",
        margin: "8px 16px",
    },
    cards: {
        marginTop: "8px"
    }
}))