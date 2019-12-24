import React from 'react';

export default function Error(props) {
  const {
    id,
    header,
    description1,
    description2,
    description3,
    description4,
    description5,
    bold1,
    bold2,
    bold3,
    bold4,
    bold5,
    close,
  } = props;
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

          {description1 ? (
            <div className="modal-body">
              <span className="font-weight-bold">{bold1}</span>
              <span>{description1}</span>
            </div>
          ) : null}
          {description2 ? (
            <div className="modal-body">
              <span className="font-weight-bold">{bold2}</span>
              <span>{description2}</span>
            </div>
          ) : null}
          {description3 ? (
            <div className="modal-body">
              <span className="font-weight-bold">{bold3}</span>
              <span>{description3}</span>
            </div>
          ) : null}
          {description4 ? (
            <div className="modal-body">
              <span className="font-weight-bold">{bold4}</span>
              <span>{description4}</span>
            </div>
          ) : null}
          {description5 ? (
            <div className="modal-body">
              <span className="font-weight-bold">{bold5}</span>
              <span>{description5}</span>
            </div>
          ) : null}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              {close || 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
