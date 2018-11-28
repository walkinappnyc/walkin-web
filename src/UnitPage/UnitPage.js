import React, { Component } from 'react';
import Slider from "react-slick";
import DescriptorCard from './DescriptorCard';
import FeaturesCard from './FeaturesCard';
import LargeCard from '../LargeCard/LargeCard';
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

const paragraphStyles = {
  fontSize: '18px',
  fontFamily: 'roboto-light',
  padding: '20px 100px 30px 20px',
}

class UnitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    fetch('https://walkin-staging.herokuapp.com/api/properties')
      .then((resp) => resp.json())
      .then((data) => { this.setState({ data }) })
  }

  renderCards() {
    const { data } = this.state;
    if (!data) return null
    return data.slice(0, 3).map(property => <LargeCard property={property} />)
  }


  render() {
    return (
      <div className="unit">
        <div className="container-fluid" style={{ backgroundColor: '#6d5b97', padding: '27px 0', marginBottom: '39px'}}>
          <div className="heroAddress">20-10 Seagirt Blvd Far Rockaway, NY 11691</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Slider {...settings}>
                <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/315-10g-kitchen.JPG" />
                <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/315-12h-bathroom-2.jpg" />
                <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/general/pts-gym.jpg" />
                <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/building/pts-garden.jpg" />
                <img src="https://goldfarbproperties.com/uploads/_styles/carousel-slide/region/columbus-circle.jpg" />
              </Slider>
              <div className="row">
                <DescriptorCard header="DESCRIPTION">
                  <p style={{ ...paragraphStyles }}>Brand new renovation! Be the first to live in this spacious unit with Stainless Steel Appliances and gorgeous views!</p>
                </DescriptorCard>
                <FeaturesCard/>
                <DescriptorCard header="NEIGHBORHOOD">
                  <p style={{ ...paragraphStyles }}>Escape from the bustle of the city to a neighborhood full of life and natural serenity. Welcome to the Rockaways, where you can find an oceanfront community, lined with a 5-mile boardwalk. Relish the influx of eateries and artistic movements inspired by the Rockaway surf culture. In additional to sandy beaches and a cool sea breeze, enjoy extreme convenience to Manhattan through the ‘A’ train. This is your beach.</p>
                </DescriptorCard>
                <DescriptorCard header="TRANSPORTATION">
                  <p style={{ ...paragraphStyles }}>The Grand Concourse, referred to as the “Park Avenue of the Bronx”, is lined with architecturally-significant buildings, many of which have been converted into exclusive condominiums and co-ops. The concourse is lined with iconic attractions including Yankee Stadium and the beautiful Bronx Museum of the Arts. The Grand Concourse, with its easy access to Manhattan, is inspiring a new wave of professionals and inviting those who want to live in luxury and reside only 20 minutes from Manhattan. The area is continuously growing and attracting diverse residents and businesses.</p>
                </DescriptorCard>
                <DescriptorCard header="BUILDING">
                  <p style={{ ...paragraphStyles }}>Escape the city and enter serenity with your new home in Wavecrest Gardens. Indulge in luxurious oceanfront Rockaway Beach rentals with easy access to …</p>
                </DescriptorCard>
                <DescriptorCard header="MAP OF THE AREA">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.559758813644!2d-73.75773928459863!3d40.59547197934468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c268ae46c88df3%3A0x8dfa6ca60a721ff2!2s20-10+Seagirt+Blvd%2C+Far+Rockaway%2C+NY+11691!5e0!3m2!1sen!2sus!4v1542252450050" width="825" height="450" frameborder="0" allowfullscreen></iframe>
                </DescriptorCard>
              </div>
            </div>


            <div className="col-md-3 stickySidebar">
              <div className="container card mb-4 box-shadow wrapper">
                <div className="row">
                  <div className="col-md-12 amenitie">
                    1 YEAR FREE GYM
                  </div>
                  <div className="col-md-12 price">
                    $1924
                  </div>
                  <div className="col-md-12 noFee">
                    NO FEE
                  </div>
                  <div className="col-md-12 sidebarSection">
                    <img className="svgStyles" src="icons/bed.svg" />
                    <div className="svgStylesText">2 BED</div>
                    <img className="svgStyles" src="icons/bathtub.svg" />
                    <div className="svgStylesText">2 BATH</div>
                  </div>
                  <div className="col-md-12 sidebarSection address">
                    <img className="svgStyles" src="icons/residential.svg" />
                    20-10 Seagirt Blvd
                    Far Rockaway, NY 11691
                  </div>
                  <div className="col-md-12 sidebarSection phone">
                    <img className="svgStyles" src="icons/phone.svg" />
                    718.471.7800
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
                    <button type="button" className="btn btn-outline-primary btn-block btnMargin">SHARE</button>
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

        <div className="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
              <div className="modal-body">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label for="formGroupExampleInput" className="bmd-label-floating">First Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label for="formGroupExampleInput2" className="bmd-label-floating">Last Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label for="formGroupExampleInput2" className="bmd-label-floating">E-mail</label>
                        <input type="email" className="form-control" id="formGroupExampleInput2" />
                        <span className="bmd-help">Well never share your email with anyone else.</span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group text-left">
                        <label for="formGroupExampleInput2" className="bmd-label-floating">Phone Number</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" />
                        <span className="bmd-help">Please dont add any special characters (-.*)</span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group text-left">
                        <label for="formGroupExampleInput2" className="bmd-label-floating">Add your message here</label>
                        <textarea className="form-control" id="formGroupExampleInput2" rows="3"></textarea>
                      </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="col-sm-12 col-md-12">
                    <span className="form-group">
                      <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default UnitPage;
