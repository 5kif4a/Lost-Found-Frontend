import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Post } from "../pages/Post/Post";
import { Feed } from "../pages/Feed/Feed";
import { AuthContainer } from "../pages/Auth/AuthContainer";
import { Items } from "../pages/Items/Items";
import { _Stories } from "../pages/Stories/Stories";
import { CreatePost } from "../pages/CreatePost/CreatePost";
import { DetailItem } from "../pages/DetailItem/DetailItem";
import { PrivateRoute } from "./PrivateRoute";
import { QR } from "../pages/QR/QR";
import { Found } from "../pages/Found/Found";
import { AddItem } from "../pages/AddItem/AddItem";
import { FeedbackContainer } from "../pages/Feedback/FeedbackContainer";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={AuthContainer} />
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/found/:itemId" component={Found} />
      <Route exact path="/qr" component={QR} />
      <Route exact path="/feedback" component={FeedbackContainer} />

      <PrivateRoute exact path="/feed" component={Feed} />
      <PrivateRoute exact path="/stories" component={_Stories} />
      <PrivateRoute exact path="/posts/:postId" component={Post} />
      <PrivateRoute exact path="/me/items/add" component={AddItem} />
      <PrivateRoute exact path="/me/items/:itemId" component={DetailItem} />
      <PrivateRoute exact path="/me/items" component={Items} />
    </Switch>
  );
};
