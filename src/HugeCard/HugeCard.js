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

const renderPill = place => {
  const regions = [
    { color: 'purple' },
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
  ];
  const randomPillNum = regions[Math.floor(Math.random() * regions.length)];
  const pillColor = randomPillNum.color;

  return <div className={`pill ${pillColor}`}>{place}</div>;
};

const renderImages = (images, id) => {
  return images.map(image => {
    if (image.type === 'floorplan') return null;
    return (
      <a key={id} href={`/unit/${id}`}>
        <img
          alt={image.description}
          style={{ height: '324px' }}
          src={image.url}
        />
      </a>
    );
  });
};

class HugeCard extends Component {
  render() {
    const { property } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 hugeCard">
        {renderPill(property.location.neighborhood)}
        <div className="card mb-4 box-shadow">
          <Slider {...settings}>
            {renderImages(property.media, property.id)}
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
                <Link to={`/unit/${property.id}`}>
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

export default HugeCard;
