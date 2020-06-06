import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

class SignInSignUp extends Component {
    render() {
        return (
            <Router basename="/react-auth-ui/">
                <div className="SignInSignUp">
                    <div className="SignInSignUp__Form">
                        <div className="PageSwitcher">
                            <NavLink
                                to="/sign-in"
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <div className="FormTitle">
                            <NavLink
                                to="/sign-in"
                                activeClassName="FormTitle__Link--Active"
                                className="FormTitle__Link"
                            >
                                Sign In
                            </NavLink>{" "}
                            or{" "}
                            <NavLink
                                exact
                                to="/"
                                activeClassName="FormTitle__Link--Active"
                                className="FormTitle__Link"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <Route
                            exact
                            path="/"
                            render={(routeProps) => (
                                <SignUpForm
                                    {...routeProps}
                                    setUser={this.props.setUser}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            render={(routeProps) => (
                                <SignInForm
                                    {...routeProps}
                                    setUser={this.props.setUser}
                                />
                            )}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default SignInSignUp;
