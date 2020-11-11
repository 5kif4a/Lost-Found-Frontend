import React, {FC, useEffect, useState} from "react";
import {Box, Button, Divider, Grid, IconButton, TextField} from "@material-ui/core";
import {useItemsStyles} from "./ItemsStyles";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import {getItemsThunk} from "../../store/thunk/items.thunk";
import {useTypedSelector} from "../../store/store";
import LinearProgress from "@material-ui/core/LinearProgress";
import {NoData} from "../../components/NoData/NoData";
import {useHistory} from "react-router";
import AddIcon from '@material-ui/icons/Add';

export const Items: FC = () => {
    const classes = useItemsStyles();
    const dispatch: any = useDispatch();
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {items} = useTypedSelector(state => state.items)

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAddItem = () => history.push("/me/items/add")

    const loadItems = async () => {
        try {
            setIsLoading(true)
            await dispatch(getItemsThunk());
        } catch (e) {
            enqueueSnackbar("", {variant: "error"})
        } finally {
            setIsLoading(false)
        }
    }

    const _items = items.map((item, index) =>
        <Grid key={index} item>
            <ItemCard item={item}/>
        </Grid>)

    useEffect(() => {
        loadItems();
    }, [])

    return (
        <Box className={classes.root}>
            <Box className={classes.control}>
                <TextField
                    placeholder="Введите ID или слово"
                    variant="outlined"
                    fullWidth
                />
                <IconButton onClick={() => history.push("/me/items/add")}>
                    <AddIcon/>
                </IconButton>
            </Box>
            <Divider/>
            {isLoading
                ? (<LinearProgress style={{color: "#0008C4"}}/>)
                : (<Grid
                    className={classes.items}
                    container
                    wrap="wrap"
                    justify="space-evenly">
                    {_items || <NoData title="Нет отмеченных вещей">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleAddItem}>
                            Добавить вещь
                        </Button>
                    </NoData>}
                </Grid>)}
        </Box>
    );
};
