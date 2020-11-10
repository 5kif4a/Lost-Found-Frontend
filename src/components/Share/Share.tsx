import React, {FC} from "react";
import {Box, Modal, Typography} from "@material-ui/core";
import {useShareStyles} from "./ShareStyles";
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
                <Typography>Поделиться</Typography>
                <Box>
                    <EmailShareButton url={""} subject={""} body={""}>
                        <EmailIcon/>
                    </EmailShareButton>
                    <FacebookShareButton url={""} title={""}>
                        <FacebookIcon/>
                    </FacebookShareButton>
                    <TelegramShareButton url={""} title={""}>
                        <TelegramIcon/>
                    </TelegramShareButton>
                    <VKShareButton url={""} title={""}>
                        <VKIcon/>
                    </VKShareButton>
                    <WhatsappShareButton url={""} title={""}>
                        <WhatsappIcon/>
                    </WhatsappShareButton>
                </Box>
            </Box>
        </Modal>
    )
}