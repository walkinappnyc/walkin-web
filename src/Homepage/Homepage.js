import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import HugeCard from '../HugeCard/HugeCard';
import RecircCard from '../RecircCard/RecircCard';
import { connect } from 'react-redux';
import { fetchData } from '../apis';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    triggerPageViewEvent();
  }

  renderCards() {
    const { properties } = this.props;

    var index = 0;
    var arrayLength = properties.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += 3) {
      let myChunk = properties.slice(index, index + 3);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray.map((properties, index) => {
      const backgroundColor =
        index % 2 === 0 ? 'bg-color-grey' : 'bg-color-purple';

      if (index % 2 === 0) {
        return (
          <div className={`${backgroundColor} container-fluid section`}>
            <div className="container">
              <div className="row">
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
      } else {
        return (
          <div className={`${backgroundColor} container-fluid section`}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-5">
                  <LargeCard classes={'paddingZero'} property={properties[1]} />
                  <RecircCard property={properties[2]} />
                </div>
                <div className="col-12 col-sm-7">
                  <LargeCard
                    classes={'hugeCard paddingZero floatLeft'}
                    property={properties[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    const { properties } = this.props;
    if (!properties) return null;
    return (
      <div>
        <img alt="" style={{ width: '100%' }} src="welcome.jpg" />
        <div className="container-fluid">
          <div className="homepageHeader">Featured Rentals</div>
          <div className="row homepageWrapper">{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.propertiesReducer.data
});

export default connect(mapStateToProps)(Homepage);
