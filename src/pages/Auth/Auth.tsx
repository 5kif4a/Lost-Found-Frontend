import React from "react";

import {useStyles} from "./AuthStyles";
import {Button, TextField} from "@material-ui/core";
import BrandImg from "../../assets/svg/brand.svg";

type PropsType = {
    email: string;
    password: string;
    handleAuthInputs: (inputName: string, value: string) => void;
    login: (e: Event) => void;
};

const Auth: React.FC<PropsType> = (props: any) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.login} className={classes.container}>
            <img className={classes.brand} src={BrandImg} alt="brang logo"/>
            <TextField
                value={props.email}
                className={classes.root}
                variant="filled"
                placeholder="E-mail"
                onChange={(e) => {
                    props.handleAuthInputs("email", e.target.value);
                }}
            />
            <TextField
                value={props.password}
                type="password"
                className={classes.root}
                variant="filled"
                placeholder="Password"
                onChange={(e) => {
                    props.handleAuthInputs("password", e.target.value);
                }}
            />

            <Button type="submit" variant="contained" color="primary">
                Войти
            </Button>
        </form>
    );
};

export {Auth};
