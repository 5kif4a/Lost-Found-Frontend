import React, {FC} from "react";
import Stories from 'react-insta-stories';
import {useHistory} from "react-router";

const stories: any = [
    "https://f8k9u4w5.stackpathcdn.com/wp-content/uploads/2013/03/Lost-house-keys.jpg",
]

const storyStyles: any = {
    position: "absolute",
    top: 0,
    left: 0
}

export const _Stories: FC = () => {
    const history = useHistory();

    const handleAllStoriesEnd = () => history.push("/feed")

    return (
        <Stories
            stories={stories}
            storyStyles={storyStyles}
            onAllStoriesEnd={handleAllStoriesEnd}
            defaultInterval={5000}
        />
    )
}