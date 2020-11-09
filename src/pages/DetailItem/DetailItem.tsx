import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {useDetailItemStyles} from "./DetailItemStyles";
import {useHistory} from "react-router-dom";

export const DetailItem: FC = () => {
    const classes = useDetailItemStyles();
    const history = useHistory();


    return (
        <Box className={classes.root}>
        </Box>
    )
}