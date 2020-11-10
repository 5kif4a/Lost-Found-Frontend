import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {Post} from "../pages/Post/Post";
import {Feed} from "../pages/Feed/Feed";
import {AuthContainer} from "../pages/Auth/AuthContainer";
import {Items} from "../pages/Items/Items";
import {_Stories} from "../pages/Stories/Stories";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/auth" component={AuthContainer}/>
            <Route exact path="/feed" component={Feed}/>
            <Route exact path="/stories" component={_Stories}/>
            <Route exact path="/posts/:postId" component={Post}/>
            <Route exact path="/me/items" component={Items}/>
        </Switch>
    );
};

