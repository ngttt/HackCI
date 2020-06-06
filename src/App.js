import React from "react";

import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";

import List from "./components/List";

function App() {
  return (
    <div className="App">
      <SignInSignUp />
      <List genre="Phim mới nhất" />
      <List genre="Phim có rating cao nhất" />
    </div>
  );
}

export default App;
