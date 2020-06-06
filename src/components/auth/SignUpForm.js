import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../../services";

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            name: "",
            error: {
                email: "",
                password: "",
                name: "",
                message: "",
            },
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            error: {
                name: "",
                email: "",
                password: "",
                message: "",
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        let error = { ...this.state.error };

        if (!this.state.email) {
            error.email = "Please input your email";
        }
        if (this.state.password.length < 6) {
            error.password = "Password must be at least 6 characters";
        }
        if (!this.state.name) {
            error.name = "Please input your name";
        }
        if (
            this.state.email &&
            this.state.name &&
            this.state.password.length >= 6
        ) {
            const userObj = {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            };

            const res = await services.signup(userObj);
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
                        <label className="FormField__Label" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="FormField__Input"
                            placeholder="Enter your full name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <div> {this.state.error.name} </div>
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

                    <div> {this.state.error.message} </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">
                            Sign Up
                        </button>{" "}
                        <Link to="/sign-in" className="FormField__Link">
                            I'm already member
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
