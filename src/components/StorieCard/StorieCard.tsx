import React, {FC} from "react";
import {Box, Typography} from "@material-ui/core";
import {useStorieCardStyles} from "./StorieCardStyles";

interface IStorieCardProps {
    icon: React.ReactNode
    title: string
    onClick: any
}

export const StorieCard: FC<IStorieCardProps> = ({icon, title, onClick}) => {
    const classes = useStorieCardStyles();

    return (
        <Box className={classes.root} onClick={onClick}>
            <Box className={classes.icon}>
                {icon}
            </Box>
            <Typography className={classes.title}>
                {title}
            </Typography>
        </Box>
    )
}