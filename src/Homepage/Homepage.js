import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import SmallCard from '../SmallCard/SmallCard';

class Homepage extends Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <img style={{ width: '100%' }} src="welcome.png" />
        <div className="container">
          <div className="row">
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <LargeCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
