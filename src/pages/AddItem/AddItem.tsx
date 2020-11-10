import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {useAddItemStyles} from "./AddItemStyles";

export const AddItem: FC = () => {
    const classes = useAddItemStyles();

    return (
        <Box className={classes.root}>

        </Box>
    );
};
