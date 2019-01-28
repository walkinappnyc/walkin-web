import React from 'react';
import { triggerPageViewEvent } from '../analytics';

const FloorplanModal = props => {
  const { floorPlan } = props;
  return (
    <div className="modal fade" id="floorPlan" tabindex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <img
            alt=""
            style={{ margin: '0 auto', width: '100%' }}
            src={floorPlan}
          />
        </div>
      </div>
    </div>
  );
};

export default FloorplanModal;
