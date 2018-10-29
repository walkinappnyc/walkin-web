import React, { Component } from 'react';

const svgStyles = {
  height: '21px',
  width: '22px',
  margin: '0 5px 0 14px',
}

class SmallCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img-top" src="images/3.jpg" data-holder-rendered="true" />
            </div>
            <div className="col-md-8">
              <div className="container">
                <div className="row justify-content-center">
                  <span className="card-text">$6,410  |  </span>
                  <img style={{...svgStyles}} className="card-img-top" src="icons/bed.svg" data-holder-rendered="true" />
                  <div>2 BED</div>
                  <img style={{...svgStyles}} className="card-img-top" src="icons/bathtub.svg" data-holder-rendered="true" />
                  <div>2 BATH</div>
                </div>
                <div className="row justify-content-center">
                  <small className="text-muted">20-10 Seagirt Bvld Far Rockaway, NY 11691</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;
