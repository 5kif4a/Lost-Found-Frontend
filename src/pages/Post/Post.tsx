import React, {FC, useEffect, useState} from "react";
import {Avatar, Box, Divider, IconButton, Typography} from "@material-ui/core";
import {usePostStyles} from "./PostStyles";
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import {useHistory, useParams} from "react-router";
import {useTypedSelector} from "../../store/store";
import {IPost} from "../../store/reducers/posts.reducer";
import ShareIcon from '@material-ui/icons/Share';

interface ParamTypes {
    postId: string
}

export const Post: FC = () => {
    const classes = usePostStyles();
    const history = useHistory();
    const {postId} = useParams<ParamTypes>();
    const posts: IPost[] = useTypedSelector(state => state.posts.posts)

    const [post, setPost] = useState<IPost>();

    useEffect(() => {
        if (postId) {
            setPost(posts.find(post => post.id === postId))
        }
    }, [postId])

    return (
        <Box className={classes.root}>
            <img className={classes.img} src={post?.imageIndex} alt="post image"/>
            <Box className={classes.toolbar}>
                <Box className={classes.toolbar__btn_block}>
                    <IconButton><PhoneIcon/></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton><ShareIcon/></IconButton>
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
                {/*<Typography className={classes.content__field}>Место находки: {}</Typography>*/}
                <Typography className={classes.content__field}>Категория: {post?.category.name}</Typography>
                <Typography className={classes.content__field}>Описание: {post?.description}</Typography>
            </Box>
        </Box>
    )
}