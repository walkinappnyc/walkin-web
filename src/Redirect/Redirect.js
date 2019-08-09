import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Redirects extends Component {
  render() {
    return <Redirect to={this.props.location.from}/>;
  }
}

export default Redirects;
