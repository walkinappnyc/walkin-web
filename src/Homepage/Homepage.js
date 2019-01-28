import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import HugeCard from '../HugeCard/HugeCard';
import RecircCard from '../RecircCard/RecircCard';
import { triggerPageViewEvent } from '../analytics';
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then(resp => resp.json())
      .then(data => {
        const activeData = data.filter(
          property => property.isActive && property.isFeatured
        );
        this.setState({ data: activeData });
      });
    triggerPageViewEvent();
  }

  renderCards() {
    const { data } = this.state;

    var index = 0;
    var arrayLength = data.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += 3) {
      let myChunk = data.slice(index, index + 3);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray.map(properties => {
      return (
        <div
          className="container-fluid"
          style={{ backgroundColor: '#6d5b97', padding: '22px 0 0' }}
        >
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <HugeCard property={properties[0]} />
            </div>
            <div className="col-xs-12 col-sm-6">
              <LargeCard property={properties[1]} />
              <RecircCard />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { data } = this.state;
    if (data === null) return null;
    return (
      <div className="album bg-light">
        <img alt="" style={{ width: '100%' }} src="welcome.jpg" />
        <div className="container py-5">
          <div className="row">{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
