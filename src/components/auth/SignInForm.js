import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../../services";

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            error: {
                email: "",
                password: "",
                message: "",
            },
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            error: {
                email: "",
                password: "",
                message: "",
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const error = { ...this.state.error };
        if (!this.state.email) {
            error.email = "Please input your email";
        }
        if (this.state.password < 6) {
            error.password = "Password must have at least 6 characters";
        }

        if (this.state.email && this.state.password >= 6) {
            const userObj = {
                email: this.state.email,
                password: this.state.password,
            };

            const res = await services.login(userObj);
            console.log(res);
            if (res.isSuccess === false) {
                console.error(res.error);
                error.message = res.error;
                this.setState({
                    error,
                });
            }
        } else {
            this.setState({
                error,
            });
        }
    };

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">
                            E-Mail Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="FormField__Input"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <div> {this.state.error.email} </div>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="FormField__Input"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div> {this.state.error.password} </div>
                    </div>

                    <div> {this.state.error.message} </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">
                            Sign In
                        </button>
                        <Link to="/" className="FormField__Link">
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
