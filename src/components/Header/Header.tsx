import React, {FC, useEffect, useState} from "react";
import {Box, Drawer, IconButton, Typography} from "@material-ui/core";
import {useHeaderStyles} from "./HeaderStyles";
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router-dom";
import {Menu} from "../Menu/Menu";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useDispatch} from "react-redux";
import {getProfileInfoThunk} from "../../store/thunk/profile.thunk";

export const Header: FC = () => {
    const classes = useHeaderStyles();
    const history = useHistory();
    const dispatch: any = useDispatch();

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const handleGoBack = () => history.push("/feed");

    const handleOpenMenu = () => setMenuIsOpen(true);
    const handleCloseMenu = () => setMenuIsOpen(false);

    useEffect(() => {
        dispatch(getProfileInfoThunk());
    }, [])

    return (
        <Box className={classes.root}>
            <IconButton onClick={handleGoBack}>
                <ArrowBackIosIcon/>
            </IconButton>
            <Typography className={classes.brand}>
                Потеряшки BI
            </Typography>
            <IconButton onClick={handleOpenMenu}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor="left" open={menuIsOpen} onClose={handleCloseMenu}>
                <Menu onClose={handleCloseMenu}/>
            </Drawer>
        </Box>
    )
}