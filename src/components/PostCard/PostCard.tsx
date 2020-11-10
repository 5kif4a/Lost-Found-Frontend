import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {usePostCardStyles} from "./PostCardStyles";
import {useHistory} from "react-router-dom";
import {IPost} from "../../store/reducers/posts.reducer";

interface IPostCardProps {
    post: IPost
}

export const PostCard: FC<IPostCardProps> = ({post}) => {
    const classes = usePostCardStyles();

    const history = useHistory();

    const handleClick = () => history.push(`/posts/${post.id}`);

    return (
        <Box className={classes.root} onClick={handleClick}>
            <img className={classes.img} src={post.imageIndex} alt="post card img"/>
        </Box>
    )
}