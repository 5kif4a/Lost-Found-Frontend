import {makeStyles} from "@material-ui/core/styles";

export const useCreatePostStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    media: {
        backgroundColor: "#B3B3B3",
        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "24px",
        cursor: "pointer"
    },
    media__input: {
        display: "none"
    },
    form: {
        margin: "16px 8px"
    },
    form__input: {
        margin: "0 8px"
    },
    form__selects: {
        margin: "8px 8px",
        display: "flex",
        flexDirection: "column"
    },
    form__select: {
        margin: "8px 0"
    },
    form__textarea: {
        margin: "16px 8px"
    },
    form__btn: {
        display: "flex",
        justifyContent: "center"
    }
}))