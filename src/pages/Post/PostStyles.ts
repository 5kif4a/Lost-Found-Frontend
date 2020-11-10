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
        height: "350px"
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
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: 500,
        margin: "16px"
    },
    content: {
        margin: "8px"
    },
    content__field: {
        fontSize: "20px",
        margin: "8px",
        "& span": {
            fontSize: "20px",
            fontWeight: 500,
            color: "#4248D3"
        }
    }
}))