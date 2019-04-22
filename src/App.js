import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import LoginSuccess from "./components/LoginSuccess";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/loginSuccess/:username' component={LoginSuccess}/>
        </Router>
      </div>
    );
  }
}

export default App;
