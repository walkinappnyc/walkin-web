import React, { Component } from 'react';

const cardStyles = {
  borderRadius: 0,
  borderTop: '4px solid #6d5b97',
}

class DiscriptorCard extends Component {
  render() {
    return (
      <div className="col-md-12 text-left">
        <h1>{ this.props.header }</h1>
        <div className="card mb-4 box-shadow" style={{...cardStyles}}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default DiscriptorCard;
