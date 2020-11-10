import React, {FC} from "react";
import {Box, IconButton, Modal, Typography} from "@material-ui/core";
import {useShareStyles} from "./ShareStyles";
import CloseIcon from '@material-ui/icons/Close';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

interface IShareProps {
    user?: any
    open: boolean
    onClose: any
}

export const Share: FC<IShareProps> = ({user, open, onClose}) => {
    const classes = useShareStyles()

    return (
        <Modal open={open} onClose={onClose}>
            <Box className={classes.root}>
                <Box className={classes.modal}>
                    <IconButton className={classes.close} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography className={classes.title}>Поделиться</Typography>
                    <Box className={classes.btn_block}>
                        <EmailShareButton url={""} subject={""} body={""}>
                            <EmailIcon size={48}/>
                        </EmailShareButton>
                        <FacebookShareButton url={""} title={""}>
                            <FacebookIcon size={48}/>
                        </FacebookShareButton>
                        <TelegramShareButton url={""} title={""}>
                            <TelegramIcon size={48}/>
                        </TelegramShareButton>
                        <VKShareButton url={""} title={""}>
                            <VKIcon size={48}/>
                        </VKShareButton>
                        <WhatsappShareButton url={""} title={""}>
                            <WhatsappIcon size={48}/>
                        </WhatsappShareButton>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}