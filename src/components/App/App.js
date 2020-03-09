import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//importing the components for the Routes
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  // routes are used to move between different pages
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/Edit" component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default App;
