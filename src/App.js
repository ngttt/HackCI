import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInSignUp from './SignInSignUp';
import List from './components/List';

function App() {
  return (
    <div className="App">
        <SignInSignUp/>
        <List/>
    </div>
  );
}

export default App;
