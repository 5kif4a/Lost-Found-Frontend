import React, {FC} from "react";
import {Avatar, Box, Divider, IconButton, Typography} from "@material-ui/core";
import {usePostStyles} from "./PostStyles";
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';

export const Post: FC = () => {
    const classes = usePostStyles();

    return (
        <Box className={classes.root}>
            <img className={classes.img} src="https://via.placeholder.com/300" alt="post image"/>
            <Box className={classes.toolbar}>
                <Box className={classes.toolbar__btn_block}>
                    <IconButton><PhoneIcon/></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                </Box>
                <Box className={classes.toolbar__avatar}>
                    <Typography className={classes.toolbar__avatar__name}>
                        Асель Гаппарова
                    </Typography>
                    <Avatar>АГ</Avatar>
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.title}>
                Нашла партмоне рядом со вторым домом
            </Box>
            <Divider/>
            <Box className={classes.content}>
                <Typography className={classes.content__field}>Место находки:&nbsp;</Typography>
                <Typography className={classes.content__field}>Статус:&nbsp;</Typography>
                <Typography className={classes.content__field}>Описание:&nbsp;</Typography>
            </Box>
        </Box>
    )
}