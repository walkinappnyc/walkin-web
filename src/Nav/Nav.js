import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RecircCard from '../RecircCard/RecircCard';
import './styles.scss'

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="navbar fixed-top navbar-light box-shadow" style={{ backgroundColor: '#fff'}}>
            <div className="container d-flex justify-content-between">
              <Link to="/">
                <strong>Walkin</strong>
              </Link>
              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Rentals
                </button>
                <div className="dropdown-menu region">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
        <div className="dropMenu">
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