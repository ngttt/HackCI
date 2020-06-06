import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header"
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <SignInSignUp />
      <List genre="Phim mới nhất" />
      <List genre="Phim có rating cao nhất" />
    </div>
  );
}

export default App;
