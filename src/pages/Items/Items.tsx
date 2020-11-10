import React, {FC} from "react";
import {Box, Divider, Grid, IconButton, TextField} from "@material-ui/core";
import {useItemsStyles} from "./ItemsStyles";
import {ItemCard} from "../../components/ItemCard/ItemCard";

export const Items: FC = () => {
    const classes = useItemsStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.control}>
                <TextField placeholder="Введите ID или слово" variant="outlined" fullWidth/>
            </Box>
            <Divider/>
            <Grid className={classes.items} container spacing={1} wrap="wrap" justify="space-evenly">
                {[...Array(6)].map((_, index) =>
                    <Grid key={index} item>
                        <ItemCard/>
                    </Grid>)}
            </Grid>
        </Box>
    )
}