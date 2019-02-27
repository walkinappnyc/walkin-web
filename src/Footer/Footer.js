import React, { Component } from 'react';
import RecircCard from '../RecircCard/RecircCard';
import { apiRoot } from '../apis';
import { triggerEvent } from '../analytics';
import './styles.scss';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`${apiRoot}/properties/`)
      .then(resp => resp.json())
      .then(data => {
        const activeData = data.filter(property => property.isActive);
        this.setState({ data: activeData });
      });
  }

  render() {
    if (!this.state.data) return null;
    return (
      <div className="footer">
        <footer>
          <div className="recircHeader">Featured Rentals</div>
          <div
            className="container-fluid"
            style={{ backgroundColor: '#6d5b97', padding: '22px 0 0' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <RecircCard
                    property={this.state.data[this.state.data.length - 1]}
                  />
                </div>
                <div className="col-md-4">
                  <RecircCard
                    property={this.state.data[this.state.data.length - 2]}
                  />
                </div>
                <div className="col-md-4">
                  <RecircCard
                    property={this.state.data[this.state.data.length - 3]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Add this in when Andrew is ready with the information */}
            {/* <div className="row justify-content-center">
              <ul className="footerLinks">
                <li>
                  <a href="#">Submit Your Listings</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms of Use & Privacy Policy</a>
                </li>
              </ul>
            </div> */}
            <hr />
            <div className="row justify-content-center">
              <ul className="footerSocial">
                <li>
                  <a
                    onClick={() =>
                      triggerEvent('Event', 'Click | Social | facebook')
                    }
                    href="https://www.facebook.com/Walkin-492748721245562"
                  >
                    <img alt="" src="/icons/facebook.svg" />
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      triggerEvent('Event', 'Click | Social | twitter')
                    }
                    href="https://twitter.com/walkdotin"
                  >
                    <img alt="" src="/icons/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      triggerEvent('Event', 'Click | Social | instagram')
                    }
                    href="https://www.instagram.com/walkdotin"
                  >
                    <img alt="" src="/icons/instagram.svg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="row justify-content-center">©2018 Walk.in</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
