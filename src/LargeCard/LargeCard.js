import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
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

function renderBedroomText(rooms) {
  if (rooms === '0') return 'STUDIO';
  return `${rooms} BED`;
}

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  nextArrow: <SampleNextArrow classes="nextArrow" />,
  prevArrow: <SamplePrevArrow classes="prevArrow" />
};

const svgStyles = {
  height: '21px',
  width: '22px',
  margin: '0 5px 0 14px'
};

const renderPill = location => {
  const colors = {
    'New York ': { color: 'purple' },
    Bronx: { color: 'red' },
    Queens: { color: 'yellow' },
    'New Rochelle': { color: 'blue' },
    Irvington: { color: 'seafoam' },
    'Far Rockaway': { color: 'burntOrange' },
    'White Plains': { color: 'burntOrange' }
  };
  const pillColor =
    (colors[location.city] && colors[location.city].color) || 'burntOrange';

  return <div className={`pill ${pillColor}`}>{location.neighborhood}</div>;
};

const renderImages = (images, id) => {
  if (!images) return null;
  return images.map(image => {
    if (image.type === 'floorplan') return null;
    return (
      <a key={id} href={`/unit/${id}`}>
        <img alt={image.description} className="cardImage" src={image.url} />
      </a>
    );
  });
};

class LargeCard extends Component {
  render() {
    const { classes, property } = this.props;
    if (!property) return null;
    return (
      <div
        className={`${classes} col-xs-12 col-sm-6 col-md-6 col-lg-4 largeCard`}
      >
        {renderPill(property.location)}
        <div className="card mb-4 box-shadow">
          <Slider {...settings}>
            {renderImages(property.media, property.xml_id)}
          </Slider>
          <div className="card-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <span className="price">
                  $
                  {property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <span className="smDivider" />

                <img alt="" style={{ ...svgStyles }} src="/icons/bed.svg" />
                <div>{renderBedroomText(property.details.bedrooms)}</div>
                <img alt="" style={{ ...svgStyles }} src="/icons/bathtub.svg" />
                <div>{property.details.bathrooms} BATH</div>
              </div>
              <div className="row justify-content-center">
                <Link to={`/unit/${property.xml_id}`}>
                  <div className="address ellipsis">
                    {property.location.address} {property.location.apartment},{' '}
                    {property.location.state} {property.location.zipcode}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LargeCard;
