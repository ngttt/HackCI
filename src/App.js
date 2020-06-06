import React from "react";

import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header";

import List from "./components/List";
import { Layout } from "antd";

const { Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Header />
      <SignInSignUp />
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
