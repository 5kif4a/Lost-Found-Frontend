import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "./Auth";
import { authUser, handelAuthInputs } from "../../store/reducers/authReducers";
import { withSnackbar } from "notistack";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
  email: "string";
  password: "string";
};
type MapDispatchPropsType = {
  authUser: (email: string, password: string) => void;
  handelAuthInputs: (inputName: string, value: string) => void;
};

type OwnPropsType = {};

class _AuthContainer extends React.Component<PropsType> {
  login = (e: Event) => {
    e.preventDefault();
    this.props.authUser(this.props.email, this.props.password);
  };

  render() {
    return (
      <Auth
        handelAuthInputs={this.props.handelAuthInputs}
        email={this.props.email}
        password={this.props.password}
        login={this.login}
      />
    );
  }
}

let mapStateToProps = (state: any) => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
  };
};

const AuthContainer = connect(mapStateToProps, { authUser, handelAuthInputs })(
  _AuthContainer
);
export { AuthContainer };
