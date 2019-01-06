import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './AboutPage/AboutPage';
import ActivationPage from './ActivationPage/ActivationPage';
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
          <Nav />
          <div style={{ marginTop: '64px' }}>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/region" component={RegionPage} />
            <Route path="/unit/:unitID" component={UnitPage} />
            <Route path="/youshallnotpass4876" component={ActivationPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
