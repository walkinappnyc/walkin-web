import React, { Component } from 'react';

class LargeCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src="default.jpg" data-holder-rendered="true" />
          <div className="card-body text-center">
            <p className="card-text">$6,410  |  2 BED 2 BATH</p>
            <small className="text-muted">20-10 Seagirt Bvld Far Rockaway, NY 11691</small>
          </div>
        </div>
      </div>
    );
  }
}

export default LargeCard;
