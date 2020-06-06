import React, { Component } from "react";
import logo from "../../assets/logo-netflix.png";

export default class Header extends Component {
    renderAuth() {
        if (this.props.user.name) {
            return (
                <button className="Login-btn"> {this.props.user.name} </button>
            );
        } else {
            return (
                <button
                    className="Login-btn"
                    onClick={() => {
                        this.props.handleDisplay("block");
                    }}
                >
                    Login
                </button>
            );
        }
    }
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} />
                    {this.renderAuth()}
                </div>
                <div className="header-content">
                </div>
            </div>
        );
    }
}
