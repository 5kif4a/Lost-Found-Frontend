import React, {FC, useEffect, useState} from "react";
import Stories from 'react-insta-stories';
import {useHistory} from "react-router";
import {Box, LinearProgress} from "@material-ui/core";
import {useStoriesStyles} from "./StoriesStyles";
import {useTypedSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {getStoriesThunk} from "../../store/thunk/stories.thunk";
import {useSnackbar} from "notistack";
import {Story} from "react-insta-stories/dist/interfaces";

const storyContent: any = {
    minWidth: '100vw',
    minHeight: '100vh',
}

export const _Stories: FC = () => {
    const history = useHistory();
    const dispatch: any = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const stories: Story[] = useTypedSelector(state => state.stories.stories)
    const classes = useStoriesStyles();

    const handleAllStoriesEnd = () => history.push("/feed")

    const getStories = async () => {
        try {
            setIsLoading(true)
            await dispatch(getStoriesThunk());
        } catch (e) {
            enqueueSnackbar("Произошла ошибка при загрузке истории")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getStories();
    }, [])


    return (
        <Box className={classes.root}>
            {isLoading ? <LinearProgress style={{color: "#0008C4"}}/> : <Stories
                stories={stories}
                storyStyles={storyContent}
                onAllStoriesEnd={handleAllStoriesEnd}
                defaultInterval={5000}
            />}
        </Box>

    )
}