import React, { Component } from 'react';
import Slider from 'react-slick';
import DescriptorCard from './DescriptorCard';
import FeaturesCard from './FeaturesCard';
import LargeCard from '../LargeCard/LargeCard';
import ContactModal from '../Modals/ContactModal';
import FloorplanModal from '../Modals/FloorplanModal';
import StickySide from './StickySide';

import './styles.scss';

function SampleNextArrow(props) {
  const { classes, className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes}`}
      style={{ display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { classes, className, style, onClick } = props;
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
  className: 'card mb-5',
  lazyLoad: 'progressive',
  nextArrow: <SampleNextArrow classes="nextArrow" />,
  prevArrow: <SamplePrevArrow classes="prevArrow" />
};

const paragraphStyles = {
  fontSize: '18px',
  fontFamily: 'roboto-light',
  padding: '20px 100px 30px 20px'
};

const renderImages = images => {
  return images.map(image => {
    if (image.type === 'floorplan') return null;
    return <img src={image.url} aria={image.description} />;
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
    fetch(`https://walkin-staging.herokuapp.com/api/properties/${unitID}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ property: data });
      });
    fetch('https://walkin-staging.herokuapp.com/api/properties/')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
      });
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

  renderTransportation(train) {
    return (
      <div>
        <span className={`subway s${train.name}`}>{train.name}</span> at{' '}
        {train.description} - {train.distance}
      </div>
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
            {property.location.address} {property.location.apartment},{' '}
            {property.location.state} {property.location.zipcode}
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
                    style={{ ...paragraphStyles }}
                    dangerouslySetInnerHTML={{
                      __html: property.details.building.description
                    }}
                  />
                </DescriptorCard>
                <FeaturesCard />
                <DescriptorCard header="NEIGHBORHOOD">
                  <p style={{ ...paragraphStyles }}>
                    Escape from the bustle of the city to a neighborhood full of
                    life and natural serenity. Welcome to the Rockaways, where
                    you can find an oceanfront community, lined with a 5-mile
                    boardwalk. Relish the influx of eateries and artistic
                    movements inspired by the Rockaway surf culture. In
                    additional to sandy beaches and a cool sea breeze, enjoy
                    extreme convenience to Manhattan through the ‘A’ train. This
                    is your beach.
                  </p>
                </DescriptorCard>
                <DescriptorCard header="TRANSPORTATION">
                  <p style={{ ...paragraphStyles }}>
                    {this.renderTransportation({
                      name: '1',
                      description: 'at Beach 25th Street',
                      distance: 'Wavecrest 0.47 miles'
                    })}
                    {this.renderTransportation({
                      name: 'W',
                      description: 'at Beach 25th Street',
                      distance: 'Wavecrest 0.47 miles'
                    })}
                    {this.renderTransportation({
                      name: 'G',
                      description: 'at Beach 25th Street',
                      distance: 'Wavecrest 0.47 miles'
                    })}
                    {this.renderTransportation({
                      name: '4',
                      description: 'at Beach 25th Street',
                      distance: 'Wavecrest 0.47 miles'
                    })}
                    {this.renderTransportation({
                      name: 'J',
                      description: 'at Beach 25th Street',
                      distance: 'Wavecrest 0.47 miles'
                    })}
                  </p>
                </DescriptorCard>
                <DescriptorCard header="BUILDING">
                  <p style={{ ...paragraphStyles }}>
                    Escape the city and enter serenity with your new home in
                    Wavecrest Gardens. Indulge in luxurious oceanfront Rockaway
                    Beach rentals with easy access to …
                  </p>
                </DescriptorCard>
                <DescriptorCard header="MAP OF THE AREA">
                  <iframe
                    title="map"
                    width="825"
                    height="450"
                    frameborder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBJU7UEWwm0D7fUDkN_kDlrACXvqafp_-M
                      &q=${property.location.address}+${
                      property.location.apartment
                    },+${property.location.state}+${property.location.zipcode}`}
                    allowfullscreen
                  />
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
        <FloorplanModal floorPlan={floorPlan} />
      </div>
    );
  }
}

export default UnitPage;
