import React, {FC, useEffect, useState} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {useDetailItemStyles} from "./DetailItemStyles";
import {useHistory} from "react-router-dom";
import QRCode from "qrcode.react"
import {useParams} from "react-router";
import {useTypedSelector} from "../../store/store";
import {IItem} from "../../store/reducers/items.reducer";

interface ParamTypes {
    itemId: string
}

export const DetailItem: FC = () => {
    const classes = useDetailItemStyles();

    const {itemId} = useParams<ParamTypes>();
    const items = useTypedSelector(state => state.items.items)

    const [item, setItem] = useState<IItem>();

    useEffect(() => {
        if (itemId) {
            setItem(items.find(item => item.id === itemId))
        }
    }, [itemId])

    return (
        <Box className={classes.root}>
            <Grid container justify="space-evenly" className={classes.header}>
                <QRCode value={`https://lostnfound-d1fc1.web.app/found/${item?.id}`}/>
                <img src={item?.imageIndex} style={{width: "200px", height: "200px"}} alt="item"/>
            </Grid>

            <Typography
                className={classes.h5}
                align="center"
                variant="h5"
                component="h6"
            >
                {item?.name}
            </Typography>

            <Box className={classes.descr} component="div">
                <Box component="div">
                    {item?.description}
                </Box>
                <Box component="div">
                    Категория: {item?.categories.name}
                </Box>
            </Box>

            <Box className={classes.tags} component="div">
                Статус: {item?.status.name}
            </Box>
        </Box>
    );
};
