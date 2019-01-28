import React, { Component } from 'react';
import { cleanFeatures } from './helpers';
import './featurecard.scss';

const cardStyles = {
  borderRadius: 0,
  borderTop: '4px solid #6d5b97'
};

class FeaturesCard extends Component {
  constructor() {
    super();
    this.state = {
      buildingFeatures: null,
      highlights: null,
      unitFeatures: null
    };
    this.renderHighlights = this.renderHighlights.bind(this);
    this.renderAmentityListItems = this.renderAmentityListItems.bind(this);
  }

  componentDidMount() {
    const { amenities } = this.props;
    const cleanedFeatures = cleanFeatures(amenities);
    this.setState({
      buildingFeatures: cleanedFeatures.buildingFeatures,
      highlights: cleanedFeatures.highlights,
      unitFeatures: cleanedFeatures.unitFeatures
    });
  }

  renderHighlights() {
    const { highlights } = this.state;
    if (!highlights) return null;
    return (
      <div>
        <div className="header">Highlights</div>
        <ul>
          {highlights.map(highlight => (
            <li>
              <img
                className="svgStyles"
                src={`/icons/${highlight.toLowerCase()}.svg`}
                alt=""
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderAmentityListItems(list) {
    if (!list) return null;
    return (
      <ul>
        {list.map(item => (
          <li>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { buildingFeatures, unitFeatures } = this.state;
    return (
      <div className="col-md-12 text-left featureCard">
        <h1>AMENITIES & FEATURES</h1>
        <div className="card mb-4 box-shadow" style={{ ...cardStyles }}>
          <div className="featuredAmentites">
            {this.renderHighlights()}
            <div className="unitFeatureWrapper">
              <div className="header">Unit</div>
              {this.renderAmentityListItems(unitFeatures)}
            </div>
            <div className="buildingFreatureWrapper">
              <div className="header">Building</div>
              {this.renderAmentityListItems(buildingFeatures)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesCard;
