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
  console.log(props)
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

const renderPill = () => {
  const regions = [
    { region: "Rockaway", color: "purple"},
    { region: "University Heights", color: "red" },
    { region: "Columbus Circle", color: "yellow" },
    { region: "Upper East Side", color: "blue" },
  ]
  const randomPillNum = regions[Math.floor(Math.random()*regions.length)];
  const pillColor = randomPillNum.color;
  const pillName = randomPillNum.region;

  return (
    <div className={`pill ${pillColor}`}>
      {pillName}
    </div>
  )
}

class LargeCard extends Component {
  render() {
    return (
      <div className="col-md-4 largeCard">
        { renderPill() }
        <div className="card mb-4 box-shadow">
          <Slider {...settings}>
            <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/315-10g-kitchen.JPG" />
            <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/315-12h-bathroom-2.jpg" />
            <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/general/pts-gym.jpg" />
            <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/pts-garden.jpg" />
            <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/region/columbus-circle.jpg" />
          </Slider>
          <div className="card-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <span className="card-text">$6,410  |  </span>
                <img style={{...svgStyles}} className="card-img-top" src="icons/bed.svg" data-holder-rendered="true" />
                <div>2 BED</div>
                <img style={{...svgStyles}} className="card-img-top" src="icons/bathtub.svg" data-holder-rendered="true" />
                <div>2 BATH</div>
              </div>
              <div className="row justify-content-center">
                <Link to="/unit"><small className="text-muted">20-10 Seagirt Bvld Far Rockaway, NY 11691</small></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LargeCard;
