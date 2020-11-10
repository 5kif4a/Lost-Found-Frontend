import React, {FC} from "react";
import Stories from 'react-insta-stories';
import {useHistory} from "react-router";
import {Box} from "@material-ui/core";
import {useStoriesStyles} from "./StoriesStyles";

const stories: any = [
    {
        url: "https://f8k9u4w5.stackpathcdn.com/wp-content/uploads/2013/03/Lost-house-keys.jpg",
        duration: 5000,
        header: {
            heading: 'Асель Гаппарова',
            subheading: 'Опубликовано 30 мин. назад',
            profileImage: 'https://via.placeholder.com/100x100',
        },
    },

]

export const _Stories: FC = () => {
    const history = useHistory();
    const classes = useStoriesStyles();

    const handleAllStoriesEnd = () => history.push("/feed")

    return (
        <Box className={classes.root}>
            <Stories
                stories={stories}
                onAllStoriesEnd={handleAllStoriesEnd}
                defaultInterval={5000}
            />
        </Box>

    )
}