import React, {FC} from "react";
import {Box, Typography} from "@material-ui/core";
import {useNoDataStyles} from "./NoDataStyles";

interface INoDataProps {
    title: string
}

export const NoData: FC<INoDataProps> = ({title, children}) => {
    const classes = useNoDataStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="h6">{title}</Typography>
            {children}
        </Box>
    );
};
