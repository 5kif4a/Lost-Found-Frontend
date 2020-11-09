import React, {FC} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Post} from "../pages/Post/Post";
import {Feed} from "../pages/Feed/Feed";
import {AuthContainer} from "../pages/Auth/AuthContainer";
import {Items} from "../pages/Items/Items";

export const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/feed" component={Feed}/>
                <Route exact path="/posts/:postId" component={Post}/>
                <Route exact path="/me/items" component={Items}/>
                <Route exact path="/auth" component={AuthContainer}/>
            </Switch>
        </Router>
    );
};

