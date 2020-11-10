import React from "react";
import {connect} from "react-redux";
import {Auth} from "./Auth";
import {Redirect} from "react-router-dom";
import {authUserThunk} from "../../store/thunk/auth.thunk";
import {handleAuthInputs} from "../../store/actions/auth.action";
import {withSnackbar} from "notistack";

class _AuthContainer extends React.Component<any> {
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
            this.props.enqueueSnackbar("Неверные данные", {variant: "error"})
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

const mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        success: state.auth.success,
    };
};

const AuthContainer = connect(
    mapStateToProps, {
        authUserThunk,
        handleAuthInputs: handleAuthInputs
    })(withSnackbar(_AuthContainer))

export {AuthContainer};
