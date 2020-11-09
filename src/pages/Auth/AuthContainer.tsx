import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "./Auth";

class _AuthContainer extends Component {
  render() {
    return <Auth />;
  }
}

let mapStateToProps = (state: any) => {
  return {};
};

const AuthContainer = connect(null, {})(Auth);
export { AuthContainer };
