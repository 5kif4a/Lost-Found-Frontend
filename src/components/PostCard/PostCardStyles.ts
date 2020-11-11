import {makeStyles} from "@material-ui/core/styles";

export const usePostCardStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
    },
    img: {
        borderRadius: "20px",
        width: "120px",
        height: "150px",
    }
}))