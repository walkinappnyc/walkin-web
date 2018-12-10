import React, { Component } from 'react';
import Slider from "react-slick";
import DescriptorCard from './DescriptorCard';
import FeaturesCard from './FeaturesCard';
import LargeCard from '../LargeCard/LargeCard';
import ContactModal from '../Modals/ContactModal';
import FloorplanModal from '../Modals/FloorplanModal';
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
  className: "card mb-5",
  lazyLoad: 'progressive',
  nextArrow: <SampleNextArrow classes="nextArrow" />,
  prevArrow: <SamplePrevArrow classes="prevArrow" />,
};

const paragraphStyles = {
  fontSize: '18px',
  fontFamily: 'roboto-light',
  padding: '20px 100px 30px 20px',
}

const renderImages = (images) => {
  return images.map((image => {
    if (image.type === 'floorplan') return null;
    return (
        <img src={image.url} aria={image.description}/>
    )
  }))
}

const renderBedroomText = (rooms) => {
  if (rooms === '0') return "STUDIO"
  return `${rooms} BED`
}

class UnitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      property: null,
    };
    this.renderCards = this.renderCards.bind(this);
    this.renderFloorPlan = this.renderFloorPlan.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const  unitID = this.props.match.params.unitID;
    fetch(`https://walkin-staging.herokuapp.com/api/properties/${unitID}`)
      .then((resp) => resp.json())
      .then((data) => { this.setState({ property: data }) })
    fetch('https://walkin-staging.herokuapp.com/api/properties/')
      .then((resp) => resp.json())
      .then((data) => { this.setState({ data }) })
  }

  renderCards() {
    const { data } = this.state;
    if (!data) return null
    return data.slice(0, 3).map(property => <LargeCard property={property} />)
  }

  renderFloorPlan(floorplan) {
    if (!floorplan) return null;
    return <span data-toggle="modal" data-target="#floorPlan" className="floorPlanPill">Floor Plan</span>
  }

  render() {
    const { property } =  this.state;
    if (!property) return null
    const floorPlan = property.media[property.media.length - 1].type === "floorplan" ? property.media[property.media.length - 1].url : null;

    return (
      <div className="unit">
        <div className="container-fluid" style={{ backgroundColor: '#6d5b97', padding: '27px 0', marginBottom: '39px'}}>
          <div className="heroAddress">{property.location.address} {property.location.apartment}, {property.location.state} {property.location.zipcode}</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Slider {...settings}>
                { renderImages(property.media) }
              </Slider>
              {this.renderFloorPlan(floorPlan)}
              <div className="row transit">
                <DescriptorCard header="DESCRIPTION">
                  <div style={{ ...paragraphStyles }} dangerouslySetInnerHTML={{ __html: property.details.building.description}} ></div>
                </DescriptorCard>
                <FeaturesCard/>
                <DescriptorCard header="NEIGHBORHOOD">
                  <p style={{ ...paragraphStyles }}>Escape from the bustle of the city to a neighborhood full of life and natural serenity. Welcome to the Rockaways, where you can find an oceanfront community, lined with a 5-mile boardwalk. Relish the influx of eateries and artistic movements inspired by the Rockaway surf culture. In additional to sandy beaches and a cool sea breeze, enjoy extreme convenience to Manhattan through the ‘A’ train. This is your beach.</p>
                </DescriptorCard>
                <DescriptorCard header="TRANSPORTATION">
                  <p style={{ ...paragraphStyles }}>
                    <span className="subway s1">1</span><span className="subway s2">2</span><span className="subway s3">3</span><span className="subway s4">4</span><span className="subway s5">5</span><span className="subway s6">6</span><span className="subway s7">7</span><span className="subway sA">A</span><span className="subway sC">C</span><span className="subway sE">E</span><span className="subway sB">B</span><span className="subway sD">D</span><span className="subway sF">F</span><span className="subway sM">M</span><span className="subway sG">G</span><span className="subway sJ">J</span><span className="subway sZ">Z</span><span className="subway sL">L</span><span className="subway sS">S</span><span className="subway sN">N</span><span className="subway sQ">Q</span><span className="subway sR">R</span><span className="subway sW">W</span>
                    The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.
                  </p>
                </DescriptorCard>
                <DescriptorCard header="BUILDING">
                  <p style={{ ...paragraphStyles }}>Escape the city and enter serenity with your new home in Wavecrest Gardens. Indulge in luxurious oceanfront Rockaway Beach rentals with easy access to …</p>
                </DescriptorCard>
                <DescriptorCard header="MAP OF THE AREA">
                  <iframe
                    width="825"
                    height="450"
                    frameborder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBJU7UEWwm0D7fUDkN_kDlrACXvqafp_-M
                      &q=${property.location.address}+${property.location.apartment},+${property.location.state}+${property.location.zipcode}`} allowfullscreen>
                  </iframe>
                </DescriptorCard>
              </div>
            </div>


            <div className="col-md-3 stickySidebar">
              <div className="container card mb-5 box-shadow wrapper">
                <div className="row">
                  <div className="col-md-12 amenitie">
                    1 YEAR FREE GYM
                  </div>
                  <div className="col-md-12 price">
                    ${property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="col-md-12 noFee">
                    NO FEE
                  </div>
                  <div className="col-md-12 sidebarSection">
                    <img className="svgStyles" src="/icons/bed.svg" />
                    <div className="svgStylesText">{ renderBedroomText(property.details.bedrooms) }</div>
                    <img className="svgStyles" src="/icons/bathtub.svg" />
                    <div className="svgStylesText">{property.details.bathrooms} BATH</div>
                  </div>
                  <div className="col-md-12 sidebarSection address">
                    <img className="svgStyles" src="/icons/residential.svg" />
                    {property.location.address} {property.location.apartment}, {property.location.state} {property.location.zipcode}
                  </div>
                  <div className="col-md-12 sidebarSection phone">
                    <img className="svgStyles" src="/icons/phone.svg" />
                    {property.agents[0].phone_number}
                  </div>
                  <div className="col-md-12 sidebarButtons">
                    <button type="button" className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#contact">
                      CONTACT
                    </button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn btn-outline-primary btn-block btnMargin">
                      <a href="https://goldfarbproperties.securecafe.com/onlineleasing/920-riverside-drive/oleapplication.aspx?stepname=RentalOptions&myOlePropertyId=218694&FloorPlanID=2043050&UnitID=3399531&header=1">
                        APPLY NOW
                      </a>
                    </button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn btn-outline-primary btn-block btnMargin">
                      <img className="logoBtn" src="/logo.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="similarHeader">SIMILAR UNITS</div>
          <div className="row">
            { this.renderCards() }
          </div>
        </div>

        <ContactModal />
        <FloorplanModal floorPlan={floorPlan} />
      </div>
    );
  }
}

export default UnitPage;
