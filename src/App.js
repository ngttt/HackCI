import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header";

import List from "./components/List";
import { Layout } from "antd";

const { Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <SignInSignUp />
      <div>
        <List genre="Phim đang chiếu" />
      </div>
    </div>
  );
}

export default App;
