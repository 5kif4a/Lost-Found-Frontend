import React, {FC, useEffect} from "react";
import {useMenuStyles} from "./MenuStyles";
import {useHistory} from "react-router-dom";
import {Avatar, Box, Button, Divider, IconButton, Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MyItems from "../../assets/svg/my items.svg";
import LostItems from "../../assets/svg/lost items.svg";
import CreatePost from "../../assets/svg/create post.svg";
import QRTag from "../../assets/svg/qr tag.svg";
import Notification from "../../assets/svg/notification.svg";
import {useTypedSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions/auth.action";
import {getProfileInfoThunk} from "../../store/thunk/profile.thunk";

interface IMenuProps {
    onClose: any
}

export const Menu: FC<IMenuProps> = ({onClose}) => {
    const classes = useMenuStyles();
    const history = useHistory();
    const dispatch: any = useDispatch();

    const {isAuthenticated} = useTypedSelector(state => state.auth);
    const {fullName, karma, avatar} = useTypedSelector(state => state.profile);

    const handleClickItem = (route: string) => {
        history.push(route);
        onClose();
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        dispatch(logout());
        onClose()
        history.push("/")
    }

    useEffect(() => {
        if (isAuthenticated && !fullName) dispatch(getProfileInfoThunk());
    }, [])

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <IconButton onClick={onClose}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Box className={classes.user}>
                    {isAuthenticated && <>
                        <Box className={classes.user_info}>
                            <Typography className={classes.user_fullname}>{fullName}</Typography>
                            <Typography className={classes.user_karma}>Карма: {karma}</Typography>
                        </Box>
                        <Avatar src={avatar}/>
                    </>}
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.menu}>
                {isAuthenticated && <Box className={classes.menu__item} onClick={() => handleClickItem("/me/items")}>
                    <img className={classes.menu__icon} src={MyItems}/>
                    <Typography>Мои вещи</Typography>
                </Box>}
                {isAuthenticated &&
                <Box className={classes.menu__item} onClick={() => handleClickItem("/feed")}>
                    <img className={classes.menu__icon} src={LostItems}/>
                    <Typography>Потеряшки</Typography>
                </Box>}
                <Box className={classes.menu__item} onClick={() => handleClickItem("/create-post")}>
                    <img className={classes.menu__icon} src={CreatePost}/>
                    <Typography>Cоздать объявление</Typography>
                </Box>
                <Box className={classes.menu__item} onClick={() => handleClickItem("/qr")}>
                    <img className={classes.menu__icon} src={QRTag}/>
                    <Typography>QR метки </Typography>
                </Box>
                {isAuthenticated && <Box className={classes.menu__item}
                                         onClick={() => handleClickItem("/notifications")}>
                    <img className={classes.menu__icon} src={Notification}/>
                    <Typography>Уведомления</Typography>
                </Box>}
            </Box>
            {isAuthenticated &&
            <Button color="primary" variant="contained" className={classes.logout} onClick={handleLogout}>Выйти из
                кабинета</Button>}
        </Box>
    );
};
