import React from 'react';
import { connect } from 'react-redux';
import Cell from './cell/Cell';

function Canvas(props) {
  const { canvas } = props;

  return (
    <div className="canvas">
      <div
        className="vertical-wrapper"
        style={{
          height: `${20 * canvas.length}px`,
        }}
      >
        {canvas.map(i => (
          <div className="row" key={`r${canvas.indexOf(i)}`}>
            <div
              className="horizontal-wrapper"
              key={`row${i}`}
              style={{
                width: `${20 * i.length}px`,
              }}
            >
              {i.map(j => {
                return (
                  <Cell
                    text={j.color || ''}
                    key={`${canvas.indexOf(i)} ${i.indexOf(j)}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  state => {
    return {
      canvas: state.canvas,
    };
  },
  dispatch => ({
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'completed' });
    },
  }),
)(Canvas);
