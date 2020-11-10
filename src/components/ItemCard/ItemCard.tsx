import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {useItemCardStyles} from "./ItemCardStyles";
import {useHistory} from "react-router-dom";

export const ItemCard: FC = () => {
    const classes = useItemCardStyles();
    const history = useHistory();

    const handleClick = () => history.push("/me/items/1")

    return (
        <Box className={classes.root} onClick={handleClick}>
            <img src="https://via.placeholder.com/160x160" alt="item card image"/>
            <Box className={classes.title}>Моя вещь - ID: 667667</Box>
        </Box>
    )
}