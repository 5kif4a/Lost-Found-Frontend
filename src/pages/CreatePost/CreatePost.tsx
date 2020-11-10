import React, {FC, useEffect, useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {useCreatePostStyles} from "./CreatePostStyles";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/store";
import {IReference} from "../../store/reducers/references.reducer";
import {getCategoriesThunk, getStatusesThunk} from "../../store/thunk/references.thunk";
import {useSnackbar} from "notistack";
import {publishPostThunk} from "../../store/thunk/posts.thunk";
import {useHistory} from "react-router";
import {Overlay} from "../../components/Overlay/Overlay";

export const CreatePost: FC = () => {
    const classes = useCreatePostStyles();
    const dispatch: any = useDispatch()
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {categories, statuses} = useTypedSelector(state => state.references)

    const [isRequesting, setIsRequesting] = useState<boolean>(false);

    const [file, setFile] = useState<any>(null);
    const [title, setTitle] = useState<string>("")
    const [placeOfLoss, setPlaceOfLoss] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(e.target.value);
    const handleChangePlaceOfLoss = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPlaceOfLoss(e.target.value);
    const handleChangeStatus = (e: React.ChangeEvent<{ value: unknown }>) => setStatus(e.target.value as string);
    const handleChangeCategory = (e: React.ChangeEvent<{ value: unknown }>) => setCategory(e.target.value as string);
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.target.value);
    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) setFile(fileList[0])
    }

    const allIsValid: boolean = [title, placeOfLoss, status, category, description].every((el: string) => el.length)

    const loadReferences = async () => {
        try {
            setIsRequesting(true);
            await dispatch(getCategoriesThunk());
            await dispatch(getStatusesThunk())
        } catch (e) {
        } finally {
            setIsRequesting(false);
        }
    }

    const makePost = async () => {
        try {
            setIsRequesting(true);
            const data = new FormData();

            data.append("title", title);
            data.append("description", description);
            data.append("image", file);
            data.append("category", category);

            await dispatch(publishPostThunk(data))
            history.push("/feed")
            enqueueSnackbar("Пост успешно опубликован", {variant: "success"})
        } catch (e) {
            enqueueSnackbar("Произошла ошибка при публикации поста", {variant: "error"})
        } finally {
            setIsRequesting(false);
        }
    }

    const publishPost = () => {
        if (allIsValid) makePost()
        else enqueueSnackbar("Заполните все поля", {variant: "warning"})
    }

    useEffect(() => {
        loadReferences();
    }, [])

    return (
        <Box className={classes.root}>
            <Overlay open={isRequesting}/>
            <label htmlFor="file" className={classes.media}>
                <PermMediaIcon fontSize="large"/>
                <Typography>{file?.name || "Загрузить медиа"}</Typography>
                <input
                    id="file"
                    type="file"
                    className={classes.media__input}
                    onChange={handleChangeFile}
                    accept="image/*"
                />
            </label>
            <Box className={classes.form}>
                <Box className={classes.form__input}>
                    <TextField
                        value={title}
                        onChange={handleChangeTitle}
                        placeholder="Заголовок поста"
                        fullWidth
                        variant="outlined"/>
                </Box>
                <Box className={classes.form__selects}>
                    <FormControl className={classes.form__select}>
                        <InputLabel style={{paddingLeft: "16px"}}>Статус</InputLabel>
                        <Select
                            value={status}
                            onChange={handleChangeStatus}
                            variant="outlined">
                            {statuses.map((status: IReference, index: number) =>
                                <MenuItem key={index} value={status.id}>
                                    {status.name}
                                </MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.form__select}>
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
                </Box>
                <Box className={classes.form__input}>
                    <TextField
                        value={placeOfLoss}
                        onChange={handleChangePlaceOfLoss}
                        placeholder="Примерное место утери"
                        fullWidth
                        variant="outlined"/>
                </Box>
                <Box className={classes.form__textarea}>
                    <TextField
                        value={description}
                        onChange={handleChangeDescription}
                        placeholder="Описание утери"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"/>
                </Box>
                <Box className={classes.form__btn}>
                    <Button variant="contained" style={{backgroundColor: "#4B8EF5"}}
                            onClick={publishPost}>Опубликовать</Button>
                </Box>
            </Box>
        </Box>
    )
}