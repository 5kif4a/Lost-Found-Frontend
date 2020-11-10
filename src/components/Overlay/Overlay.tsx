import React, {FC} from "react";
import {Box, CircularProgress, Modal} from "@material-ui/core";
import {useOverlayStyles} from "./OverlayStyles";

interface IOverlayProps {
    open: boolean
}

export const Overlay: FC<IOverlayProps> = ({open}) => {
    const classes = useOverlayStyles()

    return (
        <Modal open={open}>
            <Box className={classes.root}>
                <CircularProgress/>
            </Box>
        </Modal>
    )
}