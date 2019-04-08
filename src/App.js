import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { initAnalytics } from './analytics';
import AboutPage from './AboutPage/AboutPage';
import ActivationPage from './ActivationPage/ActivationPage';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Nav from './Nav/Nav';
import RegionPage from './RegionPage/RegionPage';
import UnitPage from './UnitPage/UnitPage';
import { getData } from './actions/propertyActions';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  componentDidMount() {
    initAnalytics();
    this.props.getData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div style={{ marginTop: '64px' }}>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/city/:cityName" component={RegionPage} />
            <Route
              path="/neighborhood/:neighborhoodName"
              component={RegionPage}
            />
            <Route path="/units/all" component={RegionPage} />
            <Route path="/unit/:unitID" component={UnitPage} />
            <Route path="/youshallnotpass4876" component={ActivationPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
