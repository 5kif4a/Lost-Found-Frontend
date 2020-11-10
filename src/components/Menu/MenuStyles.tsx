import {makeStyles} from "@material-ui/core/styles";

export const useMenuStyles = makeStyles({
    root: {
        width: "100vw",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        height: "56px",
    },
    user: {
        display: "flex",
        alignItems: "center",
        marginRight: "8px"
    },
    user_fullname: {
        fontSize: "14px",
        fontWeight: 500,
        marginRight: "8px"
    },

    menu: {
        marginTop: "8px",
        marginLeft: "8px"
    },
    menu__item: {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        color: "#2E7CF6",
        textDecoration: "none"
    },
    menu__item_active: {
        fontWeight: 500
    },
    menu__icon: {
        width: "80px",
        height: "80px",
        marginRight: "16px"
    },
});
