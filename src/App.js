import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AboutPage from './AboutPage/AboutPage';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Nav from './Nav/Nav';
import RegionPage from './RegionPage/RegionPage';
import UnitPage from './UnitPage/UnitPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <div style={{ marginTop: '77px' }}>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/region" component={RegionPage} />
            <Route path="/unit" component={UnitPage} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
