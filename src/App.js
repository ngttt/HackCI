import React, { Component } from "react";
<<<<<<< HEAD
=======

import SignInSignUp from "./components/auth/SignInSignUp";
>>>>>>> f813bcda163d177d1594daadd6b869a014d19edd
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

<<<<<<< HEAD
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
=======
import List from "./components/List";
import Modal from "./components/auth/Modal"

class App extends Component {
  constructor() {
    super();
    this.state = { display: "none"}
  }
  handleDisplay = (display) => {
    this.setState({
      display
    })
  }
  render() {
    return (
      <div className="App">
        <Header handleDisplay={this.handleDisplay} />
        <Modal display={this.state.display} handleDisplay={this.handleDisplay} />
        <List genre="Phim mới nhất" />
        <List genre="Phim có rating cao nhất" />
      </div>
    ); 
  }
>>>>>>> f813bcda163d177d1594daadd6b869a014d19edd
}

export default App;
