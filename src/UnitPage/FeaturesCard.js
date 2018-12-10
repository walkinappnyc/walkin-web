import React, { Component } from 'react';
import './featurecard.scss'

const cardStyles = {
  borderRadius: 0,
  borderTop: '4px solid #6d5b97',
}

class FeaturesCard extends Component {
  render() {
    return (
      <div className="col-md-12 text-left featureCard">
        <h1>AMENITIES & FEATURES</h1>
        <div className="card mb-4 box-shadow" style={{...cardStyles}}>
          <div className="featuredAmentites">
            <div className="header">Highlights</div>
            <ul>
              <li>
                <img className="svgStyles" src="/icons/gym.svg" />
                <span>Gym</span>
              </li>
              <li>
                <img className="svgStyles" src="/icons/garage.svg" />
                <span>Garage</span>
              </li>
              <li>
                <img className="svgStyles" src="/icons/pool.svg" />
                <span>Pool</span>
              </li>
              <li>
                <img className="svgStyles" src="/icons/washer.svg" />
                <span>Laundry</span>
              </li>
              <li>
                <img className="svgStyles" src="/icons/dog.svg" />
                <span>Pets Allowed</span>
              </li>
            </ul>
          </div>
          <div className="unitFeatureWrapper">
            <div className="header">Unit</div>
            <ul>
              <li>Dishwasher</li>
              <li>Granite Countertops</li>
              <li>Hardwood Floors</li>
              <li>Microwave</li>
            </ul>
          </div>
          <div className="buildingFreatureWrapper">
            <div className="header">Building</div>
            <ul>
              <li>Elevator</li>
              <li>Fitness Center</li>
              <li>Garage</li>
              <li>Gas, Heat, Hot Water Included</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesCard;
