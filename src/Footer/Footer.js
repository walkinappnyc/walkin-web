import React, { Component } from 'react';
import RecircCard from '../RecircCard/RecircCard';
import './styles.scss'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="recircHeader">Featured Rentals</div>
          <div className="container-fluid" style={{ backgroundColor: '#6d5b97', padding: '22px 0 0' }}>
            <div className="container">
              <div className="row">
              <div className="col-md-4"><RecircCard/></div>
              <div className="col-md-4"><RecircCard/></div>
              <div className="col-md-4"><RecircCard/></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <ul className="footerLinks">
                <li><a href="#">Submit Your Listings</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Use & Privacy Policy</a></li>
              </ul>
            </div>
            <hr/>
            <div className="row justify-content-center">
              <ul className="footerSocial">
                <li><img src="icons/facebook.svg" /></li>
                <li><img src="icons/twitter.svg" /></li>
                <li><img src="icons/instagram.svg" /></li>
              </ul>
            </div>
            <div className="row justify-content-center">
              ©2018 Andrew Goldfarb
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
            // <p className="float-right">
            //   <a href="#">Back to top</a>
            // </p>

export default Footer;
