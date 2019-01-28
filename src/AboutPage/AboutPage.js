import React, { Component } from 'react';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

class AboutPage extends Component {
  componentDidMount() {
    triggerPageViewEvent();
  }

  render() {
    return (
      <div className="about">
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#6d5b97',
            padding: '27px 0',
            marginBottom: '39px'
          }}
        >
          <div className="heroAddress">ABOUT</div>
        </div>
        <div className="container">
          <div className="row">ADD ABOUT</div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
