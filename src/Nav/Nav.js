import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RecircCard from '../RecircCard/RecircCard';
import './styles.scss'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  dropNavClasses() {
    if (this.state.isOpen) return 'dropMenu';
    return 'hide'
  }

  render() {
    return (
      <div>
        <header>
          <div className="navbar fixed-top navbar-light box-shadow" style={{ backgroundColor: '#fff'}}>
            <div className="container d-flex justify-content-between">
              <Link to="/">
                <strong>Walkin</strong>
              </Link>
              <a className="rentalsBtn" onClick={this.toggleNav} >
                Rentals
              </a>
            </div>
          </div>
        <div className={this.dropNavClasses()}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li className="menuHeader">BOROUGHS</li>
                      <li><a href="/region">Manhattan</a></li>
                      <li><a href="/region">Brooklyn</a></li>
                      <li><a href="/region">Queens</a></li>
                      <li><a href="/region">Bronx</a></li>
                      <li><a href="/region">Staten Island</a></li>
                      <li><a href="/region">All NYC</a></li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <ul>
                      <li className="menuHeader">NEIGHBORHOODS</li>
                      <div className="row">
                        <div className="col-md-6">
                          <li><a href="/region">Tribeca</a></li>
                          <li><a href="/region">Upper East Side</a></li>
                          <li><a href="/region">Upper West Side</a></li>
                          <li><a href="/region">Midtown</a></li>
                          <li><a href="/region">West Village</a></li>
                        </div>
                        <div className="col-md-6">
                          <li><a href="/region">East Village</a></li>
                          <li><a href="/region">Williamsburg</a></li>
                          <li><a href="/region">Astoria</a></li>
                          <li><a href="/region">View All</a></li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="menuHeader">
                  FEATURED RENTALS
                </div>
                <RecircCard />
                <RecircCard />
              </div>
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default Nav;