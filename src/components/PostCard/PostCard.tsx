import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {usePostCardStyles} from "./PostCardStyles";
import {useHistory} from "react-router-dom";

interface IPostCardProps {
}

export const PostCard: FC<IPostCardProps> = () => {
    const classes = usePostCardStyles();

    const history = useHistory();

    const handleClick = () => history.push("/posts/1");

    return (
        <Box className={classes.root} onClick={handleClick}>
            <img className={classes.img} src="https://via.placeholder.com/100x150" alt="post card img"/>
        </Box>
    )
}