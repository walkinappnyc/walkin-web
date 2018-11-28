import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import RecircCard from '../RecircCard/RecircCard';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then((resp) => resp.json())
      .then((data) => { this.setState({ data }) })
  }

  renderCards() {
    const { data } = this.state;
    return data.map(property => <LargeCard property={property} />)
  }

  render() {
    const { data } = this.state;
    if (data === null) return null;
    return (
      <div className="album bg-light">
        <img style={{ width: '100%' }} src="welcome.png" />
        <div className="container py-5">
          <div className="row">
            { this.renderCards() }
          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
