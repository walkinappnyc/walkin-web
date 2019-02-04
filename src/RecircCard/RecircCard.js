import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

function renderBedroomText(rooms) {
  if (rooms === '0') return 'STUDIO';
  return `${rooms}`;
}

class RecircCard extends Component {
  render() {
    const { classes, property } = this.props;
    if (!property) return null;
    return (
      <div className={`${classes} card mb-4 box-shadow recircCard`}>
        <div>
          <div className="row">
            <div className="col-4">
              <a key={property.xml_id} href={`/unit/${property.xml_id}`}>
                <img
                  alt=""
                  className="recircImage"
                  src={property.media[0].url}
                />
              </a>
            </div>
            <div className="col-8">
              <div className="container gutters justify-content-left details">
                <div className="text-primary justify-content-left region">
                  {property.neighborhood}
                </div>
                <div className="text-muted justify-content-left address ellipsis">
                  <Link to={`/unit/${property.xml_id}`}>
                    {property.location.address} {property.location.apartment},{' '}
                    {property.location.state} {property.location.zipcode}
                  </Link>
                </div>
                <span className="card-text justify-content-left price">
                  $
                  {property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <div className="text-left">
                  <img
                    alt=""
                    className="svgStyle d-inline-block"
                    src="/icons/bed.svg"
                  />
                  <div className="d-inline-block">
                    {renderBedroomText(property.details.bedrooms)} | {'  '}
                  </div>
                  <img
                    alt=""
                    className="svgStyle d-inline-block"
                    src="/icons/bathtub.svg"
                  />
                  <div className="d-inline-block">
                    {property.details.bathrooms}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecircCard;
