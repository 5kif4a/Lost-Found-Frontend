import React, {FC} from "react";
import {Box, IconButton, Typography} from "@material-ui/core";
import {useHeaderStyles} from "./HeaderStyles";
import {ArrowBack} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router-dom";

export const Header: FC = () => {
    const classes = useHeaderStyles();
    const history = useHistory();

    const handleGoBack = () => history.goBack();

    return (
        <Box className={classes.root}>
            <IconButton onClick={handleGoBack}>
                <ArrowBack/>
            </IconButton>
            <Typography className={classes.brand}>
                Потеряшки BI
            </Typography>
            <IconButton>
                <MenuIcon/>
            </IconButton>
        </Box>
    )
}