import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {usePostStyles} from "./PostStyles";

export const Post: FC = () => {
    const classes = usePostStyles();

    return (
        <Box className={classes.root}>

        </Box>
    )
}