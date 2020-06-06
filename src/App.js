import React from "react";

import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header";

import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <SignInSignUp />
      <List genre="Phim đang chiếu" />
      {/* <List genre="Phim có rating cao nhất" /> */}
    </div>
  );
}

export default App;
