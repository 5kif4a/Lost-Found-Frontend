import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "./Auth";
import { authUser, handelAuthInputs } from "../../store/reducers/authReducers";
import { withSnackbar } from "notistack";
import { Redirect } from "react-router-dom";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
  email: "string";
  password: "string";
  apiStatus: "string";
};
type MapDispatchPropsType = {
  authUser: (email: string, password: string) => void;
  handelAuthInputs: (inputName: string, value: string) => void;
};

type OwnPropsType = {};

class _AuthContainer extends React.Component<PropsType> {
  state = {
    redirect: false,
  };

  componentDidUpdate(prevProps: any) {
    if (prevProps.apiStatus !== this.props.apiStatus) {
      if (+this.props.apiStatus === 200) {
        this.setState({ redirect: true });
      }
    }
  }

  login = (e: Event) => {
    e.preventDefault();
    this.props.authUser(this.props.email, this.props.password);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/feed" />;
    }
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
    apiStatus: state.authReducer.apiStatus,
  };
};

const AuthContainer = connect(mapStateToProps, { authUser, handelAuthInputs })(
  _AuthContainer
);
export { AuthContainer };
