import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import RecircCard from '../RecircCard/RecircCard';

class Homepage extends Component {
  render() {
    return (
      <div className="album bg-light">
        <img style={{ width: '100%' }} src="welcome.png" />
        <div className="container py-5">
          <div className="row">
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <RecircCard/>
            <RecircCard/>
            <RecircCard/>
          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
