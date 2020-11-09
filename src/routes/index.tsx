import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Post } from "../pages/Post/Post";
import { AuthContainer } from "../pages/Auth/AuthContainer";

export const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts/:postId" component={Post} />
        <Route exact path="/auth" component={AuthContainer} />
      </Switch>
    </Router>
  );
};
