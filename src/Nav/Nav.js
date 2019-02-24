import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecircCard from '../RecircCard/RecircCard';
import { connect } from 'react-redux';
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
    this.renderNavItems = this.renderNavItems.bind(this);
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

  renderNavItems(area, items) {
    return items.map(value => {
      return (
        <li>
          <a href={`/${area}/${value}`}>{value}</a>
        </li>
      );
    });
  }

  render() {
    const { citys, neighborhoods, properties } = this.props;
    if (!properties) return null;
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
                              <li className="menuHeader">CITYS</li>
                              {this.renderNavItems('city', citys)}
                            </ul>
                          </div>
                          <div className="col-md-8">
                            <ul>
                              <li className="menuHeader">NEIGHBORHOODS</li>
                              <div className="row">
                                <div className="col-md-6">
                                  {this.renderNavItems(
                                    'neighborhood',
                                    Object.values(neighborhoods).slice(0, 6)
                                  )}
                                </div>
                                <div className="col-md-6">
                                  {this.renderNavItems(
                                    'neighborhood',
                                    Object.values(neighborhoods).slice(6, 11)
                                  )}
                                  <li>
                                    <a href="/units/all">View All</a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menuHeader">FEATURED RENTALS</div>
                        <RecircCard property={properties['0']} />
                        <RecircCard property={properties['1']} />
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

const mapStateToProps = state => ({
  properties: state.propertiesReducer.data,
  citys: state.propertiesReducer.navItems.citys,
  neighborhoods: state.propertiesReducer.navItems.neighborhoods
});

export default connect(mapStateToProps)(Nav);
