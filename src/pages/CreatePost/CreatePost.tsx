import React, {FC} from "react";
import {Box, MenuItem, Select, TextField} from "@material-ui/core";
import {useCreatePostStyles} from "./CreatePostStyles";

export const CreatePost: FC = () => {
    const classes = useCreatePostStyles();

    return (
        <Box className={classes.root}>
            <label>
                <img />
                <input type="file"/>
            </label>
            <Box>
                <TextField/>
            </Box>
            <Select placeholder="Статус">
                <MenuItem>

                </MenuItem>
                <MenuItem>

                </MenuItem>
                <MenuItem>

                </MenuItem>
            </Select>
            <Select placeholder="Категория">
                <MenuItem>

                </MenuItem>
                <MenuItem>

                </MenuItem>
                <MenuItem>

                </MenuItem>
            </Select>
            <TextField/>
        </Box>
    )
}