import React, { Component } from 'react';
import './styles.scss'

class RecircCard extends Component {
  render() {
    return (
      <div className="card mb-4 box-shadow recircCard">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img-top" src="/images/3.jpg" style={{ width: '127px' }} />
          </div>
          <div className="col-md-8">
            <div className="container gutters justify-content-left" style={{ margin: '8px 23px 0 17px'}}>
              <div className="row">
                <div className="text-primary region">Columbus Circle</div>
              </div>
              <div className="row">
                <div className="text-muted address">20-10 Seagirt Bvld Far Rockaway, NY 11691</div>
              </div>
              <div className="row">
                <span className="card-text price">$6,410</span>
              </div>
              <div className="row">
                <img className="svgStyle" src="/icons/bed.svg" />
                <div>2 | {'  '}</div>
                <img className="svgStyle" src="/icons/bathtub.svg" />
                <div>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecircCard;
