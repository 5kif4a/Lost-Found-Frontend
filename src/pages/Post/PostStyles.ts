import {makeStyles} from "@material-ui/core/styles";

export const usePostStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        [theme.breakpoints.down("xs")]: {}
    },
    img: {
        width: "100%",
        height: "300px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px"
    },
    toolbar__btn_block: {
        display: "flex"
    },
    toolbar__avatar: {
        display: "flex",
        alignItems: "center",
    },
    toolbar__avatar__name: {
        fontSize: "12px",
        lineHeight: "16px",
        marginRight: "8px"
    },
    title: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
        margin: "8px"
    },
    content: {
        margin: "8px"
    },
    content__field: {
        color: "#4248D3",
        fontWeight: 500
    }
}))