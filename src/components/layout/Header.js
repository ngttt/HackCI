import React, { Component } from "react";
import logo from "../../assets/logo-netflix.png";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} />
                    <button className="Login-btn">Login</button>
                </div>
                <div className="header-content">
                    <h1>See what's next</h1>
                    <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
                </div>
            </div>
        );
    }
}
