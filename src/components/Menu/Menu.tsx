import React, {FC} from "react";
import {useMenuStyles} from "./MenuStyles";
import {useHistory} from "react-router-dom";
import {Avatar, Box, Divider, IconButton, Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MyItems from "../../assets/svg/my items.svg";
import LostItems from "../../assets/svg/lost items.svg";
import CreatePost from "../../assets/svg/create post.svg";
import QRTag from "../../assets/svg/qr tag.svg";
import Notification from "../../assets/svg/notification.svg";

interface IMenuProps {
    onClose: any
}

export const Menu: FC<IMenuProps> = ({onClose}) => {
    const classes = useMenuStyles();
    const history = useHistory();

    const handleClickItem = (route: string) => {
        history.push(route);
        onClose();
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <IconButton onClick={onClose}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Box className={classes.user}>
                    <Typography className={classes.user_fullname}>Асель Гаппарова</Typography>
                    <Avatar>АГ</Avatar>
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.menu}>
                <Box className={classes.menu__item} onClick={() => handleClickItem("/me/items")}>
                    <img className={classes.menu__icon} src={MyItems}/>
                    <Typography>Мои вещи</Typography>
                </Box>
                <Box className={classes.menu__item} onClick={() => handleClickItem("/feed")}>
                    <img className={classes.menu__icon} src={LostItems}/>
                    <Typography>Потеряшки</Typography>
                </Box>
                <Box className={classes.menu__item} onClick={() => handleClickItem("/create-post")}>
                    <img className={classes.menu__icon} src={CreatePost}/>
                    <Typography>Cоздать объявление</Typography>
                </Box>
                <Box className={classes.menu__item} onClick={() => handleClickItem("/qr")}>
                    <img className={classes.menu__icon} src={QRTag}/>
                    <Typography>QR метки </Typography>
                </Box>
                <Box className={classes.menu__item}
                     onClick={() => handleClickItem("/notifications")}>
                    <img className={classes.menu__icon} src={Notification}/>
                    <Typography>Уведомления</Typography>
                </Box>
            </Box>
        </Box>
    );
};
