import React, { Component } from "react";
import List from "../List";
import AuthModal from "../auth/AuthModal";

class Home extends Component {
  render() {
    return (
      <div>
        <AuthModal
          display={this.props.display}
          handleDisplay={this.props.handleDisplay}
          setUser={this.props.setUser}
        />
        <List genre="Phim mới nhất" />
      </div>
    );
  }
}

export default Home;
