import React, {FC} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Post} from "../pages/Post/Post";
import {Feed} from "../pages/Feed/Feed";

export const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/feed" component={Feed}/>
                <Route exact path="/posts/:postId" component={Post}/>
            </Switch>
        </Router>
    )
}