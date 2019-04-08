import React, { Component } from 'react';
import LargeCard from '../LargeCard/LargeCard';
import HugeCard from '../HugeCard/HugeCard';
import RecircCard from '../RecircCard/RecircCard';
import { connect } from 'react-redux';
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
    let propertyHolder = properties.filter(property => property.isFeatured);
    let index = 0;
    let arrayLength = propertyHolder.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += 3) {
      let myChunk = propertyHolder.slice(index, index + 3);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray.map((propertyHolder, index) => {
      if (propertyHolder.length < 3) return null;
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
                    property={propertyHolder[0]}
                  />
                </div>
                <div className="col-12 col-sm-5">
                  <LargeCard
                    classes={'floatLeft paddingZero'}
                    property={propertyHolder[1]}
                  />
                  <RecircCard
                    property={propertyHolder[2]}
                    classes={'floatLeft'}
                  />
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
                  <LargeCard
                    classes={'paddingZero'}
                    property={propertyHolder[1]}
                  />
                  <RecircCard property={propertyHolder[2]} />
                </div>
                <div className="col-12 col-sm-7">
                  <LargeCard
                    classes={'hugeCard paddingZero floatLeft'}
                    property={propertyHolder[0]}
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
        <img alt="" style={{ width: '100%' }} src="welcome-min.jpeg" />
        <div className="container-fluid">
          {/* This is the Homepage header before the listings */}
          {/* <div className="homepageHeader">Featured Rentals</div> */}
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
