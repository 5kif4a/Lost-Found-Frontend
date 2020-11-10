import React, { FC } from "react";
import { Box, Divider, Grid } from "@material-ui/core";
import { useFeedStyles } from "./FeedStyles";
import { StorieCard } from "../../components/StorieCard/StorieCard";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { FoundIcon } from "../../assets/icons/FoundIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { RecentIcon } from "../../assets/icons/RecentIcon";
import { PostCard } from "../../components/PostCard/PostCard";

export const Feed: FC = () => {
  const classes = useFeedStyles();

  const history = useHistory();

  const handleAddPost = () => history.push("/create-post");
  const handleFound = () => history.push("/posts");
  const handleSearching = () => history.push("/posts");
  const handleRecent = () => history.push("/posts");

  return (
    <Box className={classes.root}>
      <Box className={classes.stories}>
        <StorieCard
          icon={<AddIcon />}
          title={"Добавить"}
          onClick={handleAddPost}
        />
        <StorieCard
          icon={<FoundIcon />}
          title={"Нашли"}
          onClick={handleFound}
        />
        <StorieCard
          icon={<SearchIcon />}
          title={"Ищут"}
          onClick={handleSearching}
        />
        <StorieCard
          icon={<RecentIcon />}
          title={"Недавние"}
          onClick={handleRecent}
        />
      </Box>
      <Divider />
      <Grid
        className={classes.cards}
        container
        spacing={1}
        wrap="wrap"
        justify="space-around"
      >
        {[...Array(24)].map((_, index) => (
          <Grid key={index} item>
            <PostCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
