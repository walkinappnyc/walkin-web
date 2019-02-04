import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import HugeCard from '../HugeCard/HugeCard';
import RecircCard from '../RecircCard/RecircCard';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';
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

    return tempArray.map((properties, index) => {
      const backgroundColor = index % 2 === 0 ? '#f5f5f5' : '#6d5b97';
      return (
        <div className="container-fluid section" style={{ backgroundColor }}>
          <div className="container">
            <div className="row">
              {/* <div className="col-12 col-sm-7 ">
                <HugeCard property={properties[0]} />
              </div> */}
              <div className="col-12 col-sm-7">
                <LargeCard
                  classes={'hugeCard paddingZero'}
                  property={properties[0]}
                />
              </div>
              <div className="col-12 col-sm-5">
                <LargeCard
                  classes={'floatLeft paddingZero'}
                  property={properties[1]}
                />
                <RecircCard property={properties[2]} classes={'floatLeft'} />
              </div>
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
        <div className="container-fluid">
          <div className="row">{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
