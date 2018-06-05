import React, { Component } from 'react';
import {Router, Route, hashHistory, Link} from 'react-router'
import './App.css';
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Record from './components/Record'


class App extends Component {
    render() {
      return (
          <div>
              <Router history={hashHistory}>
                  <Route component={SignIn} path="/"/>
                  <Route component={SignUp} path="/signup"/>
                  <Route component={Record} path="/record"/>
              </Router>
          </div>
    );
  }
}

export default App;


