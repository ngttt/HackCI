import React, { Component } from "react";
import "./index.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
        };
    }

    setUser = (userInfo) => {
        this.setState({
            user: userInfo,
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header user={this.state.user} />
                    <Route exact path={["/", "/home"]} component={Home} />
                    {/* <Route path="/detail/:id" component={Home} /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
