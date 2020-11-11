import React, {FC, useEffect, useState} from "react";
import {Box, Button, TextField, Typography} from "@material-ui/core";
import {useFoundStyles} from "./FoundStyles";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/store";
import {getCategoriesThunk, getStatusesThunk} from "../../store/thunk/references.thunk";
import {useSnackbar} from "notistack";
import {publishPostThunk} from "../../store/thunk/posts.thunk";
import {useHistory} from "react-router";
import {Overlay} from "../../components/Overlay/Overlay";

export const Found: FC = () => {
    const classes = useFoundStyles();
    const dispatch: any = useDispatch()
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {categories, statuses} = useTypedSelector(state => state.references)
    const {isAuthenticated} = useTypedSelector(state => state.auth)

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

            if (isAuthenticated) history.push("/feed")

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
            <Typography>Спасибо, что помогаете вернуть вещь!</Typography>
            <Typography>Данная форма для того, чтобы хозяйн вещи смог с вами связаться.</Typography>
            <TextField/>
            <TextField/>
            <TextField/>
            <Button></Button>
        </Box>
    )
}