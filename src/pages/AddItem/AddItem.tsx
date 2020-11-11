import React, {FC, useEffect, useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {useAddItemStyles} from "./AddItemStyles";
import {Overlay} from "../../components/Overlay/Overlay";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {useSnackbar} from "notistack";
import {IReference} from "../../store/reducers/references.reducer";
import {useTypedSelector} from "../../store/store";
import {getCategoriesThunk} from "../../store/thunk/references.thunk";
import {addItemThunk} from "../../store/thunk/items.thunk";

export const AddItem: FC = () => {
    const classes = useAddItemStyles();
    const dispatch: any = useDispatch()
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {categories} = useTypedSelector(state => state.references)

    const [file, setFile] = useState<any>(null);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const [isRequesting, setIsRequesting] = useState<boolean>(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(e.target.value);
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.target.value);
    const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => setCategory(e.target.value as string);
    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) setFile(fileList[0])
    }

    const allIsValid: boolean = [name, category, description].every((el: string) => el.length)

    const loadCategories = async () => {
        try {
            setIsRequesting(true);
            await dispatch(getCategoriesThunk());
        } catch (e) {
        } finally {
            setIsRequesting(false);
        }
    }

    const tryAddItem = async () => {
        try {
            setIsRequesting(true);
            const data = new FormData();

            data.append("name", name);
            data.append("description", description);
            data.append("image", file);
            data.append("category", category);

            await dispatch(addItemThunk(data))

            history.push("/me/items")

            enqueueSnackbar("Вещь успешно добавлена", {variant: "success"})
        } catch (e) {
            enqueueSnackbar("Произошла ошибка при добавлении вещи", {variant: "error"})
        } finally {
            setIsRequesting(false);
        }
    }

    const addItem = () => {
        if (allIsValid) tryAddItem()
        else enqueueSnackbar("Заполните все поля", {variant: "warning"})
    }

    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <Box className={classes.root}>
            <Overlay open={isRequesting}/>
            <Box className={classes.form}>
                <Box className={classes.element}>
                    <TextField value={name} placeholder="Название вещи" onChange={handleChangeName} fullWidth
                               variant="outlined"/>
                </Box>
                <FormControl className={classes.element} fullWidth>
                    <InputLabel style={{paddingLeft: "16px"}}>Категория</InputLabel>
                    <Select
                        value={category}
                        onChange={handleChangeCategory}
                        variant="outlined">
                        {categories.map((category: IReference, index: number) =>
                            <MenuItem key={index} value={category.id}>
                                {category.name}
                            </MenuItem>)}
                    </Select>
                </FormControl>
                <label htmlFor="file" className={classes.media}>
                    <PermMediaIcon fontSize="large"/>
                    <Typography>{file?.name || "Прикрепить изображение"}</Typography>
                    <input
                        id="file"
                        type="file"
                        className={classes.media__input}
                        onChange={handleChangeFile}
                        accept="image/*"
                    />
                </label>
                <TextField
                    className={classes.element}
                    value={description}
                    onChange={handleChangeDescription}
                    placeholder="Описание"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"/>
                <Button className={classes.btn} color="primary" variant="contained" onClick={addItem}>Сохранить
                    вещь</Button>
            </Box>
        </Box>
    );
};
