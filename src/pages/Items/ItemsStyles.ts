import {makeStyles} from "@material-ui/core/styles";

export const useItemsStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    control: {
        display: "flex",
        margin: "8px 16px"
    },
    items: {
        marginTop: "8px"
    }
}))