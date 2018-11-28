import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './styles.scss'

function SampleNextArrow(props) {
  const { classes, className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes}`}
      style={{ display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { classes, className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes}`}
      style={{ display: "block" }}
      onClick={onClick}
    />
  );
}

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  nextArrow: <SampleNextArrow classes="nextArrow" />,
  prevArrow: <SamplePrevArrow classes="prevArrow" />,
};

const svgStyles = {
  height: '21px',
  width: '22px',
  margin: '0 5px 0 14px',
}

const renderPill = (place) => {
  const regions = [
    { color: "purple" },
    { color: "red" },
    { color: "yellow" },
    { color: "blue" },
  ]
  const randomPillNum = regions[Math.floor(Math.random()*regions.length)];
  const pillColor = randomPillNum.color;

  return (
    <div className={`pill ${pillColor}`}>
      {place}
    </div>
  )
}

const renderImages = (images) => {
  return images.map((image => {
    if (image.type === 'floorplan') return null;
    return (
      <Link to="/unit">
        <img style={{ height: '210px' }} src={image.url} aria={image.description}/>
      </Link>
    )
  }))
}

class LargeCard extends Component {

  render() {
    const { property } = this.props
    console.log(property)
    return (
      <div className="col-md-4 largeCard">
        { renderPill(property.location.neighborhood) }
        <div className="card mb-4 box-shadow">
          <Slider {...settings}>
            { renderImages(property.media) }
          </Slider>
          <div className="card-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <span className="card-text">${property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  |  </span>
                <img style={{...svgStyles}} className="card-img-top" src="icons/bed.svg" data-holder-rendered="true" />
                <div>{ property.details.bedrooms } BED</div>
                <img style={{...svgStyles}} className="card-img-top" src="icons/bathtub.svg" data-holder-rendered="true" />
                <div>{ property.details.bathrooms } BATH</div>
              </div>
              <div className="row justify-content-center">
                <Link to="/unit">
                  <small className="text-muted">{property.location.address} {property.location.apartment}, {property.location.state} {property.location.zipcode}</small>
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
