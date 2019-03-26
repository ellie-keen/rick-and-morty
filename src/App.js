import React, { Component } from 'react';
import Header from './Header/index';
import Images from './Images/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/images" component={Images} />
        </div>
      </Router >
    );
  }
}

export default App;

