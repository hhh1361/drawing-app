import React from 'react';

export default function Error(props) {
  const { id, header, description } = props;
  return (
    <div className="modal" id={id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{header}</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">{description}</div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
