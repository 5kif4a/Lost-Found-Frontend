import React from "react";
import {connect} from "react-redux";
import {Auth} from "./Auth";
import {handleAuthInputs} from "../../store/reducers/auth.reducer";
import {Redirect} from "react-router-dom";
import {authUserThunk} from "../../store/thunk/auth.thunk";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
    email: string;
    password: string;
    success: boolean
};
type MapDispatchPropsType = {
    authUserThunk: (email: string, password: string) => void;
    handleAuthInputs: (inputName: string, value: string) => void;
};

type OwnPropsType = {};

class _AuthContainer extends React.Component<PropsType> {
    state = {
        redirect: false,
    };

    componentDidUpdate(prevProps: any) {
        if (this.props.success) {
            this.setState({redirect: true});
        }
    }


    login = async (e: Event) => {
        e.preventDefault();
        try {
            await this.props.authUserThunk(this.props.email, this.props.password);
        } catch (error) {

        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/feed"/>;
        }
        return (
            <Auth
                handleAuthInputs={this.props.handleAuthInputs}
                email={this.props.email}
                password={this.props.password}
                login={this.login}
            />
        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        success: state.auth.success,
    };
};

const AuthContainer = connect(mapStateToProps, {authUserThunk, handleAuthInputs: handleAuthInputs})(
    _AuthContainer
);
export {AuthContainer};
