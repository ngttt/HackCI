import React, { Component } from "react";
import SignInSignUp from "../auth/SignInSignUp";
import List from "../List";

class Home extends Component {
    render() {
        return (
            <div>
                <SignInSignUp setUser={this.setUser} />
                <List genre="Phim mới nhất" />
                <List genre="Phim có rating cao nhất" />
            </div>
        );
    }
}

export default Home;
