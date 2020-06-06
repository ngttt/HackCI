import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

class SignInSignUp extends Component {
    constructor() {
        super();
        this.state = {
            isSignUp: false,
        };
    }

    changeAuthForm = (authForm) => {
        this.setState({
            isSignUp: authForm,
        });
    };

    renderAuthForm = () => {
        if (this.state.isSignUp) {
            return (
                <SignUpForm
                    changeAuthForm={this.changeAuthForm}
                    setUser={this.props.setUser}
                    handleDisplay={this.props.handleDisplay}
                />
            );
        } else {
            return (
                <SignInForm
                    changeAuthForm={this.changeAuthForm}
                    setUser={this.props.setUser}
                    handleDisplay={this.props.handleDisplay}
                />
            );
        }
    };

    render() {
        return (
            <div className="auth-form-container">{this.renderAuthForm()}</div>
        );
    }
}

export default SignInSignUp;
