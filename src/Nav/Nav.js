import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecircCard from '../RecircCard/RecircCard';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter = () => {
    this.setState({ isOpen: true });
  };

  mouseLeave = () => {
    this.setState({ isOpen: false });
  };

  dropNavClasses() {
    if (this.state.isOpen) return 'dropMenu';
    return 'hide';
  }

  render() {
    return (
      <div style={{ position: 'sticky', zIndex: '2' }}>
        <nav>
          <div className="navbar fixed-top navbar-light box-shadow">
            <div className="container d-flex justify-content-between">
              <Link to="/">
                <img className="logo" src="/logo.svg" alt="logo" />
              </Link>
              <span
                className="rentalsBtn"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                Rentals
                <div className={this.dropNavClasses()}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-4">
                            <ul>
                              <li className="menuHeader">BOROUGHS</li>
                              <li>
                                <a href="/borough/New York ">New York</a>
                              </li>
                              <li>
                                <a href="/borough/New Rochelle">New Rochelle</a>
                              </li>
                              <li>
                                <a href="/borough/Irvington">Irvington</a>
                              </li>
                              <li>
                                <a href="/borough/Far Rockaway">Far Rockaway</a>
                              </li>
                              <li>
                                <a href="/borough/White Plains">White Plains</a>
                              </li>
                              <li>
                                <a href="/all">All NYC</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-8">
                            <ul>
                              <li className="menuHeader">NEIGHBORHOODS</li>
                              <div className="row">
                                <div className="col-md-6">
                                  <li>
                                    <a href="/neighborhood/tribeca">Tribeca</a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/upper-east-side">
                                      Upper East Side
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/upper-west-side">
                                      Upper West Side
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/midtown">Midtown</a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/west-village">
                                      West Village
                                    </a>
                                  </li>
                                </div>
                                <div className="col-md-6">
                                  <li>
                                    <a href="/neighborhood/east-village">
                                      East Village
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/williamsburg">
                                      Williamsburg
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/neighborhood/astoria">Astoria</a>
                                  </li>
                                  <li>
                                    <a href="/all">View All</a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menuHeader">FEATURED RENTALS</div>
                        <RecircCard />
                        <RecircCard />
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
