import React from 'react'
import { connect } from 'react-redux'
import Cell from './Cell/Cell'

function Canvas(props) {
  const { w, h, x1, y1, x2, y2, c } = props
  const array = [
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
  ]
  return (
    <div>
      {array.map(e => (
        <div className="row">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: `${20 * array.length}px`,
            }}
          >
            {e.map(() => (
              <Cell />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default connect(
  state => {
    return {
      stage: state.stage,
    }
  },
  dispatch => ({
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'completed' })
    },
  }),
)(Canvas)
