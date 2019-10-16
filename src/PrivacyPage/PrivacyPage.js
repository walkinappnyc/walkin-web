import React, { Component } from 'react';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

class PrivacyPage extends Component {
  componentDidMount() {
    triggerPageViewEvent();
  }

  render() {
    return (
      <div className="about privacy">
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#6d5b97',
            padding: '27px 0',
            marginBottom: '39px'
          }}
        >
          <div className="heroAddress">Terms of Service & Privacy Policy</div>
        </div>
        <div className="container">
          <iframe height="500px" width="100%" src="https://docs.google.com/document/d/e/2PACX-1vR-uIrNEmOaaNrrHKtP9EhvstT6_Tf0S1PNESq-OvY_PshQPUBaj0q5osmN7ruMcg/pub?embedded=true"></iframe>
        </div>
      </div>
    );
  }
}

export default PrivacyPage;
