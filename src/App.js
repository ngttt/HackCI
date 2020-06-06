import React from "react";
import SignInSignUp from "./components/auth/SignInSignUp";
import "./index.css";
import Header from "./components/layout/Header"

function App() {
    return (
        <div className="App">
            <Header/>
            <SignInSignUp />
        </div>
    );
}

export default App;
