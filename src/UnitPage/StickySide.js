import React from 'react';
import { triggerEvent } from '../analytics';
import './styles.scss';
import AppStoreLogo from '../app-store.svg';

const renderBedroomText = rooms => {
  if (rooms === '0') return 'STUDIO';
  return `${rooms} BED`;
};

const renderWalkInDeepLink = (property = {}) => {
  const { branchio_link: branchIOLink } = property;

  if (!branchIOLink) {
    return null;
  }

  return (
    <div className="col-md-12">
      <a
        href={branchIOLink}
        className="btn btn-outline-primary btn-block btnMargin walkInBtn"
      >
        OPEN ON MOBILE - SELF TOUR
        <div class="logos">
          <img className="logo walkInLogo" src="/logo.svg" alt="Walk.in logo" />
          <img
            className="logo appStoreLogo"
            src={AppStoreLogo}
            alt="Download on the App Store Badge"
          />
        </div>
      </a>
    </div>
  );
}

const StickySide = ({ property }) => {
  return (
    <div className="stickySidebar">
      <div className={`container card mb-5 box-shadow wrapper`}>
        <div className="row">
          {property.incentives.length > 0 && property.incentives[0].name ? (
            <div className="col-md-12 amentity">
              {property.incentives[0].name.toUpperCase()}
            </div>
          ) : null}
          <div className="col-md-12 price">
            ${property.details.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          {property.details.no_fee ? (
            <div className="col-md-12 noFee">NO FEE</div>
          ) : null}
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
            <a
              onClick={() => triggerEvent('Event', 'Click | phoneNumber')}
              href={`tel:${property.agents[0].phone_number}`}
            >
              <img className="svgStyles" src="/icons/phone.svg" alt="" />
              {property.agents[0].phone_number}
            </a>
          </div>
          <div className="col-md-12 sidebarButtons">
            <button
              type="button"
              className="btn btn-outline-primary btn-block"
              onClick={() => triggerEvent('Event', 'Click | contactModal')}
              data-toggle="modal"
              data-target="#contact"
            >
              CONTACT
            </button>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              onClick={() => {
                triggerEvent('Event', `Click | Applylink | ${property.xml_id}`);
                window.open(`${property.apply_url}`, '_blank');
              }}
              className="btn btn-outline-primary btn-block btnMargin"
            >
              APPLY NOW
            </button>
          </div>
          {renderWalkInDeepLink(property)}
        </div>
      </div>
    </div>
  );
};

export default StickySide;
