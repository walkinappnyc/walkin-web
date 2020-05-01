import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { initAnalytics } from './analytics';
import AboutPage from './AboutPage/AboutPage';
import PrivacyPage from './PrivacyPage/PrivacyPage';
import Redirect from './Redirect/Redirect';
import ActivationPage from './ActivationPage/ActivationPage';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Nav from './Nav/Nav';
import RegionPage from './RegionPage/RegionPage';
import UnitPage from './UnitPage/UnitPage';
import SupportPage from './Support/SupportPage';
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
        <div className="App container">
          <Nav />
          <div style={{ marginTop: '64px' }}>
            <Route path="/" exact component={Homepage} />
            <Route path="/marketplace" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/city/:cityName" component={RegionPage} />
            <Route
              path="/neighborhood/:neighborhoodName"
              component={RegionPage}
            />
            <Route path="/units/all" component={RegionPage} />
            <Route path="/unit/:unitID" component={UnitPage} />
            <Route path="/youshallnotpass4876" component={ActivationPage} />

            <Route path="/redirects/:unitId" component={Redirect} />

            <Route path="/support" component={SupportPage} />
            <Route path="/privacy" component={PrivacyPage} />
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
