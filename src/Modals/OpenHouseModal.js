import React from 'react';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

const OpenHouseModal = props => {
  const { openHouses } = props;

  const getWeekday = day => {
    const date = new Date(day);
    switch (date.getDay()) {
      case 0:
        return `Sunday ${date.getMonth()}/${date.getDate()}`;
      case 1:
        return `Monday ${date.getMonth()}/${date.getDate()}`;
      case 2:
        return `Tuesday ${date.getMonth()}/${date.getDate()}`;
      case 3:
        return `Wednesday ${date.getMonth()}/${date.getDate()}`;
      case 4:
        return `Thursday ${date.getMonth()}/${date.getDate()}`;
      case 5:
        return `Friday ${date.getMonth()}/${date.getDate()}`;
      case 6:
        return `Saturday ${date.getMonth()}/${date.getDate()}`;
      default:
    }
  };
  const renderOpenHousesList = () => {
    return openHouses.map(date => {
      return (
        <li className="dateListItem">
          <span className="weekday">
            {getWeekday(date.startsAt.split(' ')[0])}{' '}
          </span>
          {date.startsAt.split(' ')[1]} - {date.endsAt.split(' ')[1]}
        </li>
      );
    });
  };
  return (
    <div className="modal fade" id="openHouses" tabindex="-1" role="dialog">
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Open Houses
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul className="openHouseList">{renderOpenHousesList()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenHouseModal;
