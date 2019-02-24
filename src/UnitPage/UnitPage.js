import React, { Component } from 'react';
import Slider from 'react-slick';
import DescriptorCard from './DescriptorCard';
import FeaturesCard from './FeaturesCard';
import LargeCard from '../LargeCard/LargeCard';
import ContactModal from '../Modals/ContactModal';
import OpenHouseModal from '../Modals/OpenHouseModal';
import FloorplanModal from '../Modals/FloorplanModal';
import StickySide from './StickySide';

import { apiRoot } from '../apis';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

function SampleNextArrow(props) {
  const { classes, className, onClick } = props;
  return (
    <div
      className={`${className} ${classes}`}
      style={{ display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { classes, className, onClick } = props;
  return (
    <div
      className={`${className} ${classes}`}
      style={{ display: 'block' }}
      onClick={onClick}
    />
  );
}

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'card',
  lazyLoad: 'progressive',
  nextArrow: <SampleNextArrow classes="nextArrow" />,
  prevArrow: <SamplePrevArrow classes="prevArrow" />
};

const renderImages = images => {
  return images.map(image => {
    if (image.type === 'floorplan') return null;
    return <img alt="" src={image.url} aria={image.description} />;
  });
};

class UnitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      property: null
    };
    this.renderCards = this.renderCards.bind(this);
    this.renderFloorPlan = this.renderFloorPlan.bind(this);
    this.renderTransportation = this.renderTransportation.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const unitID = this.props.match.params.unitID;
    fetch(`${apiRoot}/properties/${unitID}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ property: data });
      });
    fetch(`${apiRoot}/properties/`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
      });
    triggerPageViewEvent();
  }

  renderCards() {
    const { data } = this.state;
    if (!data) return null;
    return data.slice(0, 3).map(property => <LargeCard property={property} />);
  }

  renderFloorPlan(floorplan) {
    if (!floorplan) return null;
    return (
      <span
        data-toggle="modal"
        data-target="#floorPlan"
        className="floorPlanPill"
      >
        Floor Plan
      </span>
    );
  }

  renderTransportation(trains) {
    if (!trains || trains.length === 0) return null;
    const renderTrains = trains.map(train => {
      const lines = train.line.map(line => (
        <span className={`subway s${line}`}>{line}</span>
      ));
      return (
        <div>
          {lines} at {train.station} - {train.proximity}
        </div>
      );
    });

    return (
      <DescriptorCard header="TRANSPORTATION">
        <p className="paragraphStyles">{renderTrains}</p>
      </DescriptorCard>
    );
  }

  render() {
    const { property } = this.state;
    if (!property) return null;
    const floorPlan =
      property.media[property.media.length - 1].type === 'floorplan'
        ? property.media[property.media.length - 1].url
        : null;

    return (
      <div className="unit">
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#6d5b97',
            padding: '27px 0',
            marginBottom: '39px'
          }}
        >
          <div className="heroAddress">
            {property.neighborhood} - {property.location.address}{' '}
            {property.location.apartment}, {property.location.state}{' '}
            {property.location.zipcode}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12">
              <Slider {...settings}>{renderImages(property.media)}</Slider>
              {this.renderFloorPlan(floorPlan)}
              <div className="row transit">
                <div className="col-lg-12 posInline">
                  <StickySide property={property} />
                </div>
                <DescriptorCard header="DESCRIPTION">
                  <div
                    className="paragraphStyles"
                    dangerouslySetInnerHTML={{
                      __html: property.details.description.unit
                    }}
                  />
                </DescriptorCard>
                <FeaturesCard amenities={property.details.amenities} />
                {this.renderTransportation(property.transportation)}
                <DescriptorCard header="BUILDING">
                  <div
                    className="paragraphStyles"
                    dangerouslySetInnerHTML={{
                      __html: property.details.description.building
                    }}
                  />
                </DescriptorCard>
                <DescriptorCard header="MAP OF THE AREA">
                  <div class="google-maps">
                    <iframe
                      title="map"
                      width="825"
                      height="450"
                      frameborder="0"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBJU7UEWwm0D7fUDkN_kDlrACXvqafp_-M
                      &q=${property.location.address}+${
                        property.location.apartment
                      },+${property.location.state}+${
                        property.location.zipcode
                      }`}
                      allowfullscreen
                    />
                  </div>
                </DescriptorCard>
              </div>
            </div>

            <div className="col-xl-3 posSide">
              <StickySide property={property} />
            </div>
          </div>

          <div className="similarHeader">SIMILAR UNITS</div>
          <div className="row">{this.renderCards()}</div>
        </div>

        <ContactModal />
        <OpenHouseModal openHouses={property.open_houses} />
        <FloorplanModal floorPlan={floorPlan} />
      </div>
    );
  }
}

export default UnitPage;
