import React, { Component } from 'react';
import Slider from "react-slick";
import DescriptorCard from './DescriptorCard';
import LargeCard from '../LargeCard/LargeCard';

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  arrows: false
};

const svgStyles = {
  height: '21px',
  width: '22px',
  margin: '0 5px 0 14px',
}

const paragraphStyles = {
  fontSize: '18px',
  fontFamily: 'roboto-light',
  padding: '20px 100px 30px 20px',
}
class UnitPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Slider {...settings}>
                <img className="card-img-top" src="images/3.jpg" data-holder-rendered="true" />
                <img className="card-img-top" src="images/2.jpg" data-holder-rendered="true" />
                <img className="card-img-top" src="images/1.jpg" data-holder-rendered="true" />
              </Slider>
              <div className="row">
                <DescriptorCard header="DESCRIPTION">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
                <DescriptorCard header="AMENITIES & FEATURES">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
                <DescriptorCard header="NEIGHBORHOOD">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
                <DescriptorCard header="TRANSPORTATION">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
                <DescriptorCard header="BUILDING">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
              </div>
            </div>
            <div style={{ height: '50vh', position: 'sticky', top: '100px' }} className="col-md-3">
              <div className="container card mb-4 box-shadow">
                <div className="row">
                  <div className="col-md-12">
                    1 YEAR FREE GYM
                  </div>
                  <div className="col-md-12">
                    $1924
                  </div>
                  <div className="col-md-12">
                    NO FEE
                  </div>
                  <div className="col-md-12">
                    <div className="row justify-content-center">
                    <img style={{...svgStyles}} className="card-img-top" src="icons/bed.svg" data-holder-rendered="true" />
                    <div>2 BED</div>
                    <img style={{...svgStyles}} className="card-img-top" src="icons/bathtub.svg" data-holder-rendered="true" />
                    <div>2 BATH</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    20-10 Seagirt Blvd
                    Far Rockaway, NY 11691
                  </div>
                  <div className="col-md-12">
                    718.471.7800
                  </div>
                  <div className="col-md-12">
                    <button type="button" class="btn btn-outline-primary btn-block">CONTACT LEASING</button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" class="btn btn-outline-primary btn-block">APPLY NOW</button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" class="btn btn-outline-primary btn-block">SHARE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <LargeCard />
            <LargeCard />
            <LargeCard />
          </div>
        </div>
      </div>
    );
  }
}

export default UnitPage;
