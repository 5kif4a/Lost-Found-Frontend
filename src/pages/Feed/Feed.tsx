import React, {FC, useEffect, useState} from "react";
import {Box, Divider, Grid} from "@material-ui/core";
import {useFeedStyles} from "./FeedStyles";
import {StorieCard} from "../../components/StorieCard/StorieCard";
import AddIcon from "@material-ui/icons/Add";
import {useHistory} from "react-router-dom";
import {FoundIcon} from "../../assets/icons/FoundIcon";
import {PostCard} from "../../components/PostCard/PostCard";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import SearchIcon from "@material-ui/icons/Search";
import {useTypedSelector} from "../../store/store";
import {getPostsThunk} from "../../store/thunk/posts.thunk";
import {useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Feed: FC = () => {
    const classes = useFeedStyles();
    const dispatch: any = useDispatch();
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {posts} = useTypedSelector((state) => state.posts);

    const [isLoading, setLoading] = useState<boolean>(false);

    const handleAddPost = () => history.push("/create-post");
    const handleFound = () => history.push("/stories");
    const handleSearching = () => history.push("/stories");
    const handleRecent = () => history.push("/stories");

    const getPosts = async () => {
        try {
            setLoading(true);
            await dispatch(getPostsThunk());
        } catch (e) {
            enqueueSnackbar("Произошла ошибка при загрузке постов");
        } finally {
            setLoading(false);
        }
    };

    const _posts = posts.map((post: any, index: number) => (
        <Grid key={index} item>
            <PostCard post={post}/>
        </Grid>
    ));

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.stories}>
                <StorieCard
                    icon={<AddIcon/>}
                    title={"Добавить"}
                    onClick={handleAddPost}
                />
                <StorieCard
                    icon={<FoundIcon/>}
                    title={"Нашли"}
                    onClick={handleFound}
                />
                <StorieCard
                    icon={<SearchIcon/>}
                    title={"Ищут"}
                    onClick={handleSearching}
                />
                <StorieCard
                    icon={<HourglassEmptyIcon/>}
                    title={"Недавние"}
                    onClick={handleRecent}
                />
            </Box>
            <Divider/>
            {isLoading ? (
                <LinearProgress style={{color: "#0008C4"}}/>
            ) : (
                <Grid
                    className={classes.cards}
                    container
                    wrap="wrap"
                    justify="space-evenly"
                >
                    {_posts}
                </Grid>
            )}
        </Box>
    );
};
