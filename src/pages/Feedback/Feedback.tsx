import React from "react";
import {useFeedbackStyles} from "./FeedbackStyles";
import {Box, Button, Grid, TextField} from "@material-ui/core";

const Feedback = () => {
    const classes = useFeedbackStyles();
    return (
        <Box className={classes.root}>
            <Grid container direction="column">
                <TextField className={classes.input} placeholder="Имя"/>
                <TextField className={classes.input} placeholder="Контактный телефон"/>
                <TextField
                    multiline
                    className={classes.input}
                    placeholder="Сообщение"
                />
                <Button className={classes.btn} variant="contained" color="primary">
                    Отправить
                </Button>
            </Grid>

            <Box className={classes.span} component="span">
                Спасибо, что помогаете вернуть вещь! Данная форма для того, чтобы хозяйн
                вещи смог с вами связаться.
            </Box>
        </Box>
    );
};

export {Feedback};
