import React, {FC, useEffect, useState} from "react";
import {Avatar, Box, Divider, IconButton, Typography} from "@material-ui/core";
import {usePostStyles} from "./PostStyles";
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import {useParams} from "react-router";
import {useTypedSelector} from "../../store/store";
import {IPost} from "../../store/reducers/posts.reducer";
import ShareIcon from '@material-ui/icons/Share';
import {Share} from "../../components/Share/Share";


interface ParamTypes {
    postId: string
}

export const Post: FC = () => {
    const classes = usePostStyles();

    const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false)
    const {postId} = useParams<ParamTypes>();
    const posts: IPost[] = useTypedSelector(state => state.posts.posts)

    const [post, setPost] = useState<IPost>();

    const handleOpenShareModal = () => setShareModalIsOpen(true);
    const handleCloseShareModal = () => setShareModalIsOpen(false);

    useEffect(() => {
        if (postId) {
            setPost(posts.find(post => post.id === postId))
        }
    }, [postId])

    return (
        <Box className={classes.root}>
            <Share open={shareModalIsOpen} onClose={handleCloseShareModal}/>
            <img className={classes.img} src={post?.imageIndex} alt="post image"/>
            <Box className={classes.toolbar}>
                <Box className={classes.toolbar__btn_block}>
                    <IconButton href="tel:8-778-832-32-01"><PhoneIcon/></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton onClick={handleOpenShareModal}><ShareIcon/></IconButton>
                </Box>
                <Box className={classes.toolbar__avatar}>
                    <Typography className={classes.toolbar__avatar__name}>
                        {post?.user.fullName}
                    </Typography>
                    <Avatar src={post?.user.avatar}/>
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.title}>{post?.title}</Box>
            <Divider/>
            <Box className={classes.content}>
                <Typography className={classes.content__field}><Typography component="span">Место
                    находки: </Typography>{post?.location || "не указано"}</Typography>
                <Typography className={classes.content__field}><Typography
                    component="span">Категория: </Typography>{post?.category.name}</Typography>
                <Typography className={classes.content__field}><Typography
                    component="span">Описание: </Typography>{post?.description}</Typography>
            </Box>
        </Box>
    )
}