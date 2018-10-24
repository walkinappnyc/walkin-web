import React, { Component } from 'react';
import LargeCard from './LargeCard/LargeCard';

class Nav extends Component {
  render() {
    return (
      <div>

        <header>
          <div className="navbar fixed-top navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <strong>Walkin</strong>
              </a>
              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Rentals
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <img style={{ width: '100%' }} src="welcome.png" />

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <LargeCard/>
              <LargeCard/>
              <LargeCard/>
              <LargeCard/>
              <LargeCard/>
              <LargeCard/>
            </div>
          </div>
        </div>

        <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
        </div>
        </footer>

      </div>
    );
  }
}

export default Nav;