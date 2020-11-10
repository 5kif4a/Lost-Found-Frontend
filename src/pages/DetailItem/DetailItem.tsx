import React, {FC} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {useDetailItemStyles} from "./DetailItemStyles";
import {useHistory} from "react-router-dom";
import DogIcon from "../../assets/svg/dog.svg";
import QRicon from "../../assets/svg/qrIcon.svg";

export const DetailItem: FC = () => {
    const classes = useDetailItemStyles();
    const history = useHistory();

    return (
        <Box className={classes.root}>
            <Grid container justify="space-evenly" className={classes.header}>
                <img src={QRicon} alt="dog icon"/>
                <img src={DogIcon} alt="dog icon"/>
            </Grid>

            <Typography
                className={classes.h5}
                align="center"
                variant="h5"
                component="h6"
            >
                Арчи
            </Typography>

            <Box className={classes.descr} component="div">
                <Box component="div">
                    Белый ротфеллер 5 месяцев, отзывается на имя Арчи.
                </Box>
                <Box component="div">
                    Имеет ошейник красного цвета с инициалами А.С.
                </Box>
            </Box>

            <Box className={classes.tags} component="div">
                Тэги: Животные, ЖК Гайд Парк
            </Box>
        </Box>
    );
};
