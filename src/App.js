import React, { Component } from "react";

import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header"

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
}

export default App;
