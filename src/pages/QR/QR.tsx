import React, {FC, useState} from "react";
import {Box} from "@material-ui/core";
// import QrReader from 'react-qr-reader'
import {useSnackbar} from "notistack";


export const QR: FC = () => {
    const {enqueueSnackbar} = useSnackbar();

    const [result, setResult] = useState();

    const handleScan = (data: any) => {
        console.log(data)
        setResult(data)
    }
    const handleError = (err: string) => {
        console.log(err)
        // enqueueSnackbar(err)
    }

    return (
        <Box>
            {/*<Typography>Результат: {result}</Typography>*/}
            {/*<QrReader*/}
            {/*    delay={300}*/}
            {/*    onError={handleError}*/}
            {/*    onScan={handleScan}*/}
            {/*    style={{width: '100%'}}*/}
            {/*/>*/}
        </Box>
    )
}
