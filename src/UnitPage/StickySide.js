import React from 'react';
import './styles.scss';

const renderBedroomText = rooms => {
  if (rooms === '0') return 'STUDIO';
  return `${rooms} BED`;
};

const StickySide = ({ property }) => {
  return (
    <div className="stickySidebar">
      <div className={`container card mb-5 box-shadow wrapper`}>
        <div className="row">
          <div className="col-md-12 amentity">1 YEAR FREE GYM</div>
          <div className="col-md-12 price">
            ${property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          <div className="col-md-12 noFee">NO FEE</div>
          <div className="col-md-12 sidebarSection">
            <img className="svgStyles" src="/icons/bed.svg" alt="" />
            <div className="svgStylesText">
              {renderBedroomText(property.details.bedrooms)}
            </div>
            <img className="svgStyles" src="/icons/bathtub.svg" alt="" />
            <div className="svgStylesText">
              {property.details.bathrooms} BATH
            </div>
          </div>
          <div className="col-md-12 sidebarSection address">
            <img className="svgStyles" src="/icons/residential.svg" alt="" />
            {property.location.address} {property.location.apartment},{' '}
            {property.location.state} {property.location.zipcode}
          </div>
          <div className="col-md-12 sidebarSection phone">
            <img className="svgStyles" src="/icons/phone.svg" alt="" />
            {property.agents[0].phone_number}
          </div>
          <div className="col-md-12 sidebarButtons">
            <button
              type="button"
              className="btn btn-outline-primary btn-block"
              data-toggle="modal"
              data-target="#contact"
            >
              CONTACT
            </button>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-outline-primary btn-block btnMargin"
            >
              <a href="https://goldfarbproperties.securecafe.com/onlineleasing/920-riverside-drive/oleapplication.aspx?stepname=RentalOptions&myOlePropertyId=218694&FloorPlanID=2043050&UnitID=3399531&header=1">
                APPLY NOW
              </a>
            </button>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-outline-primary btn-block btnMargin"
            >
              <img className="logoBtn" src="/logo.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySide;
