import React, { Component } from 'react';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

class RecircCard extends Component {
  render() {
    return (
      <div className="card mb-4 box-shadow recircCard">
        <div className="row no-gutters">
          <div className="col-xs-4">
            <img
              alt=""
              className="card-img-top"
              src="/images/3.jpg"
              style={{ width: '127px' }}
            />
          </div>
          <div className="col-xs-8">
            <div
              className="container gutters justify-content-left"
              style={{ margin: '8px 23px 0 17px' }}
            >
              <div className="row">
                <div className="text-primary region">Columbus Circle</div>
              </div>
              <div className="row">
                <div className="text-muted address">
                  20-10 Seagirt Bvld Far Rockaway, NY 11691
                </div>
              </div>
              <div className="row">
                <span className="card-text price">$6,410</span>
              </div>
              <div className="row">
                <img alt="" className="svgStyle" src="/icons/bed.svg" />
                <div>2 | {'  '}</div>
                <img alt="" className="svgStyle" src="/icons/bathtub.svg" />
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
