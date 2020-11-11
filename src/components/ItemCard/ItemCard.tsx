import React, {FC} from "react";
import {Box} from "@material-ui/core";
import {useItemCardStyles} from "./ItemCardStyles";
import {useHistory} from "react-router-dom";
import {IItem} from "../../store/reducers/items.reducer";

interface IItemCardProps {
    item: IItem
}

export const ItemCard: FC<IItemCardProps> = ({item}) => {
    const classes = useItemCardStyles();
    const history = useHistory();

    const handleClick = () => history.push(`/me/items/${item.id}`)

    return (
        <Box className={classes.root} onClick={handleClick}>
            <img style={{width: "160px", height: "160px"}} src={item.imageIndex} alt={item.name}/>
            <Box className={classes.title}>{item.name}</Box>
        </Box>
    )
}