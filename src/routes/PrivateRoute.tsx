import React, {FC} from 'react'
import {Redirect, Route, RouteProps} from "react-router-dom";
import {RouteComponentProps} from "react-router";

export const PrivateRoute: FC<RouteProps> = ({component: Component, ...rest}) => {
    const isAuthenticated: string | null = localStorage.getItem("accessToken");

    if (!Component) return null

    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps<{}>) => (
                isAuthenticated
                    ? <Component {...props}/>
                    : <Redirect to="/"/>
            )}
        />
    );
};
